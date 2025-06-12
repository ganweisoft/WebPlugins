/**
 * Created by lycheng on 2019/8/9.
 */
let self = this
this.onmessage = function (e) {
  switch (e.data.command) {
    case 'transform':
      transform.transaction(e.data.buffer);
      break;
  }
}

let transform = {
  transaction(buffer) {
    let bufTo16kHz = transform.to16kHz(buffer)
    let bufTo16BitPCM = transform.to16BitPCM(bufTo16kHz)

    // let bufToBase64 = transform.toBase64(bufTo16BitPCM)
    self.postMessage({ 'buffer': bufTo16BitPCM })
  },
  to16kHz(buffer) {
    let data = new Float32Array(buffer)
    let fitCount = Math.round(data.length * (16000 / 44100))
    let newData = new Float32Array(fitCount)
    let springFactor = (data.length - 1) / (fitCount - 1)
    newData[0] = data[0]
    for (let i = 1; i < fitCount - 1; i++) {
      let tmp = i * springFactor
      let before = Math.floor(tmp).toFixed()
      let after = Math.ceil(tmp).toFixed()
      let atPoint = tmp - before
      newData[i] = data[before] + (data[after] - data[before]) * atPoint
    }
    newData[fitCount - 1] = data[data.length - 1]
    return newData
  },

  to16BitPCM(input) {
    let dataLength = input.length * (16 / 8)
    let dataBuffer = new ArrayBuffer(dataLength)
    let dataView = new DataView(dataBuffer)
    let offset = 0
    for (let i = 0; i < input.length; i++, offset += 2) {
      let s = Math.max(-1, Math.min(1, input[i]))
      dataView.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true)
    }
    return Array.from(new Int8Array(dataView.buffer))
  },
  toBase64(buffer) {
    let binary = ''
    let bytes = new Uint8Array(buffer)
    let len = bytes.byteLength
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
  }
}
