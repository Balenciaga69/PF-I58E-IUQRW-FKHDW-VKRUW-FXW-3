/* eslint-disable lodash/prefer-lodash-method */
window.DEBUG ||= {}
window.DEBUG.MI20001 ||= {}

function commonJumpExec() {
  window.DEBUG.ENABLE_MOUSE_SIGN ||= true // 通用 (滑鼠簽名)
  window.DEBUG.MI20001.STEP_PASS_INVALID ||= true // 新壽
  window.DEBUG.MI20001.STEP_PASS_BY_CORE_CHECK ||= true // 新壽
  window.DEBUG_MI21002_FF_STEP ||= true // 不知道哪家的
}

function sklAllSignBiExec() {
  const nextBool = !window.DEBUG.NOTE.SIGN_ALL_FIELD
  console.info(' XzX :', '新壽/一鍵簽名', nextBool ? '啟用' : '停用')
  window.DEBUG.NOTE.SIGN_ALL_FIELD = nextBool
}

function sklAutoTomorrowExec() {
  const nextBool = !window.DEBUG.MI20001.MAKE_IT_TOMORROW
  console.info(' XzX :', '新壽/直接跨日', nextBool ? '啟用' : '停用')
  window.DEBUG.MI20001.MAKE_IT_TOMORROW = nextBool
}

executeSequence('qeqe', commonJumpExec)
executeSequence('qdsd', sklAllSignBiExec)
executeSequence('ivele', sklAutoTomorrowExec)


function executeSequence(str, execFunc) {
  // 將輸入字串轉換為小寫並拆分為字符陣列
  const sequence = str.toLowerCase().split('')

  // 初始化一個空字串以存儲使用者的輸入
  let input = ''

  // 為 document 添加 keydown 事件監聽器
  document.addEventListener('keydown', function (event) {
    // 獲取被按下的按鍵
    const keyPressed = event.key

    // 檢查被按下的按鍵是否與序列中下一個字符匹配
    if (keyPressed.toLowerCase() === sequence[input.length]) {
      // 將被按下的按鍵添加到輸入字串並轉換為小寫
      input += keyPressed
      input = input.toLowerCase()

      // 檢查使用者是否輸入了完整的序列
      if (input === sequence.join('')) {
        // 重置輸入字串
        input = ''

        // 執行提供的函數
        execFunc()
      }
    } else {
      // 如果被按下的按鍵與序列中下一個字符不匹配，則重置輸入字串
      input = ''
    }
  })
}
