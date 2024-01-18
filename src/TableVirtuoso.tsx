import { systemToComponent } from './react-urx'
import * as u from './urx'
import React from 'react'
import { FC, Fragment, PropsWithChildren, ReactElement, Ref, createElement, memo, useContext, useEffect, useState } from 'react'
import useChangedListContentsSizes from './hooks/useChangedChildSizes'
import {
  ComputeItemKey,
  ItemContent,
  FixedHeaderContent,
  FixedFooterContent,
  TableComponents,
  TableRootProps,
  GroupContent,
} from './interfaces'
import { positionStickyCssValue } from './utils/positionStickyCssValue'

import { listSystem } from './listSystem'
import {
  identity,
  buildScroller,
  buildWindowScroller,
  viewportStyle,
  contextPropIfNotDomElement,
  itemPropIfNotDomElement,
} from './Virtuoso'
import useSize from './hooks/useSize'
import { correctItemSize } from './utils/correctItemSize'
import useWindowViewportRectRef from './hooks/useWindowViewportRect'
import { VirtuosoMockContext } from './utils/context'
import { TableVirtuosoHandle, TableVirtuosoProps } from './component-interfaces/TableVirtuoso'

const GROUP_STYLE = { position: positionStickyCssValue(), zIndex: 1, overflowAnchor: 'none' } as const

const tableComponentPropsSystem = /*#__PURE__*/ u.system(() => {
  const itemContent = u.statefulStream<ItemContent<any, unknown>>((index: number) => <td>Item ${index}</td>)
  const context = u.statefulStream<unknown>(null)
  const fixedHeaderContent = u.statefulStream<FixedHeaderContent>(null)
  const fixedFooterContent = u.statefulStream<FixedFooterContent>(null)
  const groupContent = u.statefulStream<GroupContent<unknown>>((index: number) => <td>Group {index}</td>)
  const components = u.statefulStream<TableComponents>({})
  const computeItemKey = u.statefulStream<ComputeItemKey<any, unknown>>(identity)
  const scrollerRef = u.statefulStream<(ref: HTMLElement | Window | null) => void>(u.noop)

  const distinctProp = <K extends keyof TableComponents>(
    propName: K,
    defaultValue: TableComponents[K] | null | 'thead' | 'tfoot' | 'table' | 'tbody' | 'tr' | 'div' = null
  ) => {
    return u.statefulStreamFromEmitter(
      u.pipe(
        components,
        u.map((components) => components[propName]),
        u.distinctUntilChanged()
      ),
      defaultValue
    )
  }

  return {
    context,
    itemContent,
    groupContent,
    fixedHeaderContent,
    fixedFooterContent,
    components,
    computeItemKey,
    scrollerRef,
    TableComponent: distinctProp('Table', 'table'),
    TableHeadComponent: distinctProp('TableHead', 'thead'),
    TableFooterComponent: distinctProp('TableFoot', 'tfoot'),
    TableBodyComponent: distinctProp('TableBody', 'tbody'),
    TableRowComponent: distinctProp('TableRow', 'tr'),
    GroupComponent: distinctProp('Group', 'tr'),
    ScrollerComponent: distinctProp('Scroller', 'div'),
    EmptyPlaceholder: distinctProp('EmptyPlaceholder'),
    ScrollSeekPlaceholder: distinctProp('ScrollSeekPlaceholder'),
    FillerRow: distinctProp('FillerRow'),
  }
})

const combinedSystem = /*#__PURE__*/ u.system(([listSystem, propsSystem]) => {
  return { ...listSystem, ...propsSystem }
}, u.tup(listSystem, tableComponentPropsSystem))

const DefaultScrollSeekPlaceholder = ({ height }: { height: number }) => (
  <tr>
    <td style={{ height }}></td>
  </tr>
)

const DefaultFillerRow = ({ height }: { height: number }) => (
  <tr>
    <td style={{ height: height, padding: 0, border: 0 }}></td>
  </tr>
)

const ITEM_STYLE = { overflowAnchor: 'none' } as const

const Items = /*#__PURE__*/ memo(function VirtuosoItems({ showTopList = false }: { showTopList?: boolean }) {
  const listState = useEmitterValue('listState')
  const sizeRanges = usePublisher('sizeRanges')
  const useWindowScroll = useEmitterValue('useWindowScroll')
  const customScrollParent = useEmitterValue('customScrollParent')
  const windowScrollContainerStateCallback = usePublisher('windowScrollContainerState')
  const _scrollContainerStateCallback = usePublisher('scrollContainerState')
  const scrollContainerStateCallback =
    customScrollParent || useWindowScroll ? windowScrollContainerStateCallback : _scrollContainerStateCallback
  const itemContent = useEmitterValue('itemContent')
  const trackItemSizes = useEmitterValue('trackItemSizes')
  const itemSize = useEmitterValue('itemSize')
  const log = useEmitterValue('log')
  const groupContent = useEmitterValue('groupContent')

  const { callbackRef, ref } = useChangedListContentsSizes(
    sizeRanges,
    itemSize,
    trackItemSizes,
    scrollContainerStateCallback,
    log,
    undefined,
    customScrollParent
  )

  const [deviation, setDeviation] = useState(0)
  useEmitter('deviation', (value) => {
    if (deviation !== value) {
      ref.current!.style.marginTop = `${value}px`
      setDeviation(value)
    }
  })
  const EmptyPlaceholder = useEmitterValue('EmptyPlaceholder')
  const ScrollSeekPlaceholder = useEmitterValue('ScrollSeekPlaceholder') || DefaultScrollSeekPlaceholder
  const FillerRow = useEmitterValue('FillerRow') || DefaultFillerRow
  const TableBodyComponent = useEmitterValue('TableBodyComponent')!
  const TableRowComponent = useEmitterValue('TableRowComponent')!
  const GroupComponent = useEmitterValue('GroupComponent')!
  const computeItemKey = useEmitterValue('computeItemKey')
  const isSeeking = useEmitterValue('isSeeking')
  const paddingTopAddition = useEmitterValue('paddingTopAddition')
  const firstItemIndex = useEmitterValue('firstItemIndex')
  const statefulTotalCount = useEmitterValue('statefulTotalCount')
  const context = useEmitterValue('context')

  if (statefulTotalCount === 0 && EmptyPlaceholder) {
    return createElement(EmptyPlaceholder, contextPropIfNotDomElement(EmptyPlaceholder, context))
  }

  const paddingTop = listState.offsetTop - listState.topListHeight + paddingTopAddition + deviation
  const paddingBottom = listState.offsetBottom

  const paddingTopEl = showTopList === false && paddingTop > 0 ? <FillerRow height={paddingTop} key="padding-top" /> : null

  const paddingBottomEl = showTopList === false && paddingBottom > 0 ? <FillerRow height={paddingBottom} key="padding-bottom" /> : null

  const items = (showTopList ? listState.topItems : listState.items).map((item) => {
    const index = item.originalIndex!
    const key = computeItemKey(index + firstItemIndex, item.data, context)

    if (isSeeking) {
      return createElement(ScrollSeekPlaceholder, {
        ...contextPropIfNotDomElement(ScrollSeekPlaceholder, context),
        key,
        index: item.index,
        height: item.size,
        type: item.type || 'item',
      })
    }

    if (item.type === 'group') {
      return createElement(
        GroupComponent,
        {
          ...contextPropIfNotDomElement(GroupComponent, context),
          key,
          'data-index': index,
          'data-known-size': item.size,
          'data-item-index': item.index,
          style: GROUP_STYLE,
        },
        groupContent(item.index, context)
      )
    }

    return createElement(
      TableRowComponent,
      {
        ...contextPropIfNotDomElement(TableRowComponent, context),
        ...itemPropIfNotDomElement(TableRowComponent, item.data),
        key,
        'data-index': index,
        'data-known-size': item.size,
        'data-item-index': item.index,
        'data-item-group-index': item.groupIndex,
        item: item.data,
        style: ITEM_STYLE,
      },
      itemContent(item.index, item.data, context)
    )
  })

  if (showTopList) return createElement(Fragment, {}, [paddingTopEl, ...items, paddingBottomEl])

  return createElement(
    TableBodyComponent,
    { ref: callbackRef, 'data-test-id': 'virtuoso-item-list', ...contextPropIfNotDomElement(TableBodyComponent, context) },
    [paddingTopEl, ...items, paddingBottomEl]
  )
})

const Viewport: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const ctx = useContext(VirtuosoMockContext)
  const viewportHeight = usePublisher('viewportHeight')
  const fixedItemHeight = usePublisher('fixedItemHeight')
  const viewportRef = useSize(u.compose(viewportHeight, (el) => correctItemSize(el, 'height')))

  useEffect(() => {
    if (ctx) {
      viewportHeight(ctx.viewportHeight)
      fixedItemHeight(ctx.itemHeight)
    }
  }, [ctx, viewportHeight, fixedItemHeight])

  return (
    <div style={viewportStyle} ref={viewportRef} data-viewport-type="element">
      {children}
    </div>
  )
}

const WindowViewport: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const ctx = useContext(VirtuosoMockContext)
  const windowViewportRect = usePublisher('windowViewportRect')
  const fixedItemHeight = usePublisher('fixedItemHeight')
  const customScrollParent = useEmitterValue('customScrollParent')
  const viewportRef = useWindowViewportRectRef(windowViewportRect, customScrollParent)

  useEffect(() => {
    if (ctx) {
      fixedItemHeight(ctx.itemHeight)
      windowViewportRect({ offsetTop: 0, visibleHeight: ctx.viewportHeight, visibleWidth: 100 })
    }
  }, [ctx, windowViewportRect, fixedItemHeight])

  return (
    <div ref={viewportRef} style={viewportStyle} data-viewport-type="window">
      {children}
    </div>
  )
}

const TableRoot: FC<TableRootProps> = /*#__PURE__*/ memo(function TableVirtuosoRoot(props) {
  const useWindowScroll = useEmitterValue('useWindowScroll')
  const customScrollParent = useEmitterValue('customScrollParent')
  const fixedHeaderHeight = usePublisher('fixedHeaderHeight')
  const fixedFooterHeight = usePublisher('fixedFooterHeight')
  const fixedHeaderContent = useEmitterValue('fixedHeaderContent')
  const fixedFooterContent = useEmitterValue('fixedFooterContent')
  const context = useEmitterValue('context')
  const theadRef = useSize(u.compose(fixedHeaderHeight, (el) => correctItemSize(el, 'height')))
  const tfootRef = useSize(u.compose(fixedFooterHeight, (el) => correctItemSize(el, 'height')))
  const TheScroller = customScrollParent || useWindowScroll ? WindowScroller : Scroller
  const TheViewport = customScrollParent || useWindowScroll ? WindowViewport : Viewport
  const TheTable = useEmitterValue('TableComponent')
  const TheTHead = useEmitterValue('TableHeadComponent')
  const TheTFoot = useEmitterValue('TableFooterComponent')
  const showTopList = useEmitterValue('topItemsIndexes').length > 0

  const theHead = fixedHeaderContent
    ? createElement(
        TheTHead!,
        {
          key: 'TableHead',
          style: { zIndex: 2, position: 'sticky', top: 0 },
          ref: theadRef,
          ...contextPropIfNotDomElement(TheTHead, context),
        },
        fixedHeaderContent(),
        ...(showTopList ? [<Items key="fixed-header-content" showTopList />] : [])
      )
    : null
  const theFoot = fixedFooterContent
    ? createElement(
        TheTFoot!,
        {
          key: 'TableFoot',
          style: { zIndex: 1, position: 'sticky', bottom: 0 },
          ref: tfootRef,
          ...contextPropIfNotDomElement(TheTFoot, context),
        },
        fixedFooterContent()
      )
    : null

  return (
    <TheScroller {...props}>
      <TheViewport>
        {createElement(
          TheTable!,
          { style: { borderSpacing: 0, overflowAnchor: 'none' }, ...contextPropIfNotDomElement(TheTable, context) },
          [theHead, <Items key="TableBody" />, theFoot]
        )}
      </TheViewport>
    </TheScroller>
  )
})

const {
  Component: Table,
  usePublisher,
  useEmitterValue,
  useEmitter,
} = /*#__PURE__*/ systemToComponent(
  combinedSystem,
  {
    required: {},
    optional: {
      restoreStateFrom: 'restoreStateFrom',
      context: 'context',
      followOutput: 'followOutput',
      firstItemIndex: 'firstItemIndex',
      itemContent: 'itemContent',
      fixedHeaderContent: 'fixedHeaderContent',
      fixedFooterContent: 'fixedFooterContent',
      overscan: 'overscan',
      increaseViewportBy: 'increaseViewportBy',
      totalCount: 'totalCount',
      topItemCount: 'topItemCount',
      initialTopMostItemIndex: 'initialTopMostItemIndex',
      components: 'components',
      groupContent: 'groupContent',
      groupCounts: 'groupCounts',
      atBottomThreshold: 'atBottomThreshold',
      atTopThreshold: 'atTopThreshold',
      computeItemKey: 'computeItemKey',
      defaultItemHeight: 'defaultItemHeight',
      fixedItemHeight: 'fixedItemHeight',
      itemSize: 'itemSize',
      scrollSeekConfiguration: 'scrollSeekConfiguration',
      data: 'data',
      initialItemCount: 'initialItemCount',
      initialScrollTop: 'initialScrollTop',
      alignToBottom: 'alignToBottom',
      useWindowScroll: 'useWindowScroll',
      customScrollParent: 'customScrollParent',
      scrollerRef: 'scrollerRef',
      logLevel: 'logLevel',
    },
    methods: {
      scrollToIndex: 'scrollToIndex',
      scrollIntoView: 'scrollIntoView',
      scrollTo: 'scrollTo',
      scrollBy: 'scrollBy',
      getState: 'getState',
    },
    events: {
      isScrolling: 'isScrolling',
      endReached: 'endReached',
      startReached: 'startReached',
      rangeChanged: 'rangeChanged',
      atBottomStateChange: 'atBottomStateChange',
      atTopStateChange: 'atTopStateChange',
      totalListHeightChanged: 'totalListHeightChanged',
      itemsRendered: 'itemsRendered',
      groupIndices: 'groupIndices',
    },
  },
  TableRoot
)

const Scroller = /*#__PURE__*/ buildScroller({ usePublisher, useEmitterValue, useEmitter })
const WindowScroller = /*#__PURE__*/ buildWindowScroller({ usePublisher, useEmitterValue, useEmitter })

export const TableVirtuoso = Table as <ItemData = any, Context = any>(
  props: TableVirtuosoProps<ItemData, Context> & { ref?: Ref<TableVirtuosoHandle> }
) => ReactElement
