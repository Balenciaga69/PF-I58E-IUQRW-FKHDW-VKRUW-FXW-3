/* eslint-disable lodash/prefer-lodash-method */
window.DEBUG ||= {}
window.DEBUG.MI20001 ||= {}

function zuoBiExec() {
  window.DEBUG.ENABLE_MOUSE_SIGN ||= true
  window.DEBUG.MI20001.STEP_PASS_INVALID ||= true
  window.DEBUG.MI20001.STEP_PASS_BY_CORE_CHECK ||= true
  window.DEBUG_MI21002_FF_STEP ||= true
  console.info(' XzX :', '快速通關啟動!!!')
}

function signZuoBiExec() {
  const nextBool = !window.DEBUG.NOTE.SIGN_ALL_FIELD
  console.info(' XzX :', '已觸發切換:補辦一鍵簽名', nextBool ? '啟用' : '停用')
  window.DEBUG.NOTE.SIGN_ALL_FIELD = nextBool
}

function tomorrowExec() {
  const nextBool = !window.DEBUG.MI20001.MAKE_IT_TOMORROW
  console.info(' XzX :', '已觸發切換:今天就是明天', nextBool ? '啟用' : '停用')
  window.DEBUG.MI20001.MAKE_IT_TOMORROW = nextBool
}

executeSequence('qeqe', zuoBiExec)
executeSequence('qdsd', signZuoBiExec)
executeSequence('ivele', tomorrowExec)

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
