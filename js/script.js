//nav bar.......................................

const nav = document.getElementsByClassName('nav')[0]
const toggle = document.getElementsByClassName('toggle-icon')[0]
const bars = document.getElementsByClassName('bars')[0]
const times = document.getElementsByClassName('times')[0]

bars.onclick = function () {
  'use strict'
  nav.classList.toggle('collapse')
  times.classList.add('show')
  bars.classList.add('hide')
}
times.onclick = function () {
  'use strict'
  nav.classList.toggle('collapse')
  times.classList.remove('show')
  bars.classList.remove('hide')
}
AOS.init()
