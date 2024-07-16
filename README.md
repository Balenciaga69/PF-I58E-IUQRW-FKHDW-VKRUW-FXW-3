# PF-I58E-IUQRW-FKHDW-VKRUW-FXW-3

## 在 Chrome 瀏覽器中啟用自訂 JavaScript 和 CSS

為了在特定網址上啟用並使用自訂的 JavaScript 和 CSS，請按照以下步驟操作：

### 步驟 1：安裝擴充功能
1. 前往 [User JavaScript and CSS](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) 的 Chrome 網頁應用程式商店頁面。
2. 點擊「加到 Chrome」按鈕並按照提示安裝擴充功能。

### 步驟 2：新增 URL 模式
1. 安裝完成後，打開擴充功能設定頁面。
2. 在「URL pattern」區塊中，新增你希望啟用該 CSS 和 JavaScript 的網址。使用以下範例網址：
```
http://localhost:8080/*,https://localhost:8080/*,https://f25b-tacb-sit.f25b.com/MINS_MI/mobileins/*,
```

### 步驟 3：貼上代碼並儲存
1. 在對應的區域內，貼上你的 CSS 或 JavaScript 代碼。
2. 儲存變更。

### 步驟 4：重啟網站
1. 重啟你要套用語法的網站以查看效果。

### 假如遇到錯誤：Developer Mode Required

如果你遇到「Developer mode required」的錯誤，請按照以下步驟解決：

#### 步驟 1：啟用開發者模式
1. 在 Chrome 瀏覽器中打開擴充功能管理頁面（在地址欄輸入 `chrome://extensions/` 進入）。
2. 在右上角啟用「開發者模式」（Developer mode）。

#### 步驟 2：完成設置
1. 確認「開發者模式」已啟用後，重新執行前面的步驟，並重啟網站。

完成以上步驟後，你應該能夠在指定的網址上成功運行自訂的 CSS 和 JavaScript 了。
