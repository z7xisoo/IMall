<template>
  <div v-loading="loading" class="scan-code">
    <div id="qrcode" ref="qrcode"></div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
  name: "ScanCode",
  props: {
    updateKey: Number
  },
  data() {
    return {
      codeTime: null,
      loading: false
    };
  },
  watch: {
    updateKey: {
      handler() {
        this.setQRCode();
      }
    }
  },
  mounted() {
    this.setQRCode();
  },
  methods: {
    setQRCode() {
      this.loading = true;
      document.getElementById("qrcode").innerHTML = "";
      if (this.codeTime) clearTimeout(this.codeTime);
      this.codeTime = setTimeout(() => {
        const qrcode = new QRCode("qrcode", {
          width: 200,
          height: 200, // 高度
          text: "https://github.com/LINXIROI", // 二维码内容
          background: "yellow",
          foreground: "#00ac80"
        });
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.scan-code {
  width: 360px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(-30deg, orange 15%, yellow 85%);
}
</style>