// 文件转base64
export function getBase64 (cfg) {
  let config = {
    // inputElement[0].files[0]
    file: null,
    // 回调函数，
    callback: null,
    // 此数据仅进行回调返回，不做任何改动
    originData: null
  }
  Object.assign(config, cfg)
  let file = cfg.file
  let result = {
    error: false,
    base64: null,
    originData: cfg.originData
  }
  if (file) {
    let reader = new FileReader()
    reader.onload = function (event) {
      result.error = true
      result.base64 = event.target.result
      cfg.callback && cfg.callback(result)
    }
    reader.readAsDataURL(file)
  } else {
    cfg.callback && cfg.callback(result)
  }
}

/* 判断是否是图片文件 */
export function checkIsImageFile (filename) {
  let type = (filename.substr(filename.lastIndexOf('.'))).toLowerCase()
  if (type === '.jpg' || type === '.gif' || type === '.jpeg' || type === '.png') {
    return true
  }
  return false
}

/*
 * 解析url参数
 * @example ?id=12345&a=b
 * @return
 */
export function urlParse () {
  let url = window.location.href
  let obj = {}
  let reg = /[?&][^?&]+=[^?&]+/g
  let arr = url.match(reg)
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=')
      let key = decodeURIComponent(tempArr[0])
      let val = decodeURIComponent(tempArr[1])
      obj[key] = val
    })
  }
  return obj
}

/*
 * 对象深度克隆
 */
export function deepClone (object) {
  let obj = {}
  obj = JSON.parse(JSON.stringify(object))
  return obj
}

/* 验证密码规则(只允许英文和数字)
 * @params: minLength = 最小长度
 * @params: maxLength = 最大长度
 */
export function checkPassword (str, minLength, maxLength) {
  if (!str) {
    return false
  }
  if (str.length < minLength || str.length > maxLength) {
    return false
  }
  let reg = /[A-Za-z]+[0-9]+|[0-9]+[A-Za-z]+/
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}
