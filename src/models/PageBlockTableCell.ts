import {
  PageBlockHorizontalAlignmentUnion,
  PageBlockVerticalAlignmentUnion,
  RichTextUnion
} from '../outputs'

/** Represents a cell of a table */
export class PageBlockTableCellBaseModel {
  public _: 'pageBlockTableCell'
  /** Cell text */
  public text: RichTextUnion
  /** True, if it is a header cell */
  public isHeader: boolean
  /** The number of columns the cell should span */
  public colspan: number
  /** The number of rows the cell should span */
  public rowspan: number
  /** Horizontal cell content alignment */
  public align: PageBlockHorizontalAlignmentUnion
  /** Vertical cell content alignment */
  public valign: PageBlockVerticalAlignmentUnion
}
