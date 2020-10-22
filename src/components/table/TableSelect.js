export class TableSelect {
  static className = 'selected'

  constructor() {
    this.group = []
    this.current = null
  }

  select($el) {
    this.clear()
    $el.focus().addClass(TableSelect.className)
    this.group.push($el)
    this.current = $el
  }

  selectGroup($group) {
    this.clear()
    this.group = $group
    this.group.forEach($el => $el.addClass(TableSelect.className))
  }

  clear() {
    this.group.forEach($el => $el.removeClass(TableSelect.className))
    this.group = []
  }
}
