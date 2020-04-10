<template>
  <div class="pay-code" tabindex="0" :style="payCodestyle">
    <el-input
      v-for="(t,k) in elArray"
      :class="[
        k < ilength - 1 && 'pay-code-after',
        k === 0 && 'first-pay',
        k === ilength - 1 && 'last-pay',
      ]"
      :key="k"
      :value="t.v"
      :ref="`payInput${k}`"
      @input="(v) => handleInput(k,v.trim())"
      placeholder
    ></el-input>
  </div>
</template>
<script>
export default {
  name: "PayCode",
  data() {
    return {};
  },
  props: {
    ilength: {
      type: Number,
      default: 6
    },
    code: {
      type: [Number, String],
      default: ""
    }
  },
  computed: {
    elArray() {
      return Array(this.ilength)
        .fill({})
        .map((t, k) => {
          return {
            v: this.code.toString()[k] || ""
          };
        });
    },
    payCodestyle() {
      return {
        width: `${this.ilength * 60 + 2}px`
      };
    }
  },
  watch: {
    code: {
      handler(v) {
        if (v.length !== this.ilength) {
          this.handlePayInputFocus(`payInput${v.length}`);
        }
      }
    }
  },
  mounted() {
    this.$el.addEventListener("keyup", this.handleKeyup);
  },
  beforeDestroy() {
    this.$el.removeEventListener("keyup", this.handleKeyup);
  },
  methods: {
    handleKeyup(e) {
      if (e.keyCode === 8) {
        if (this.code.length === 1) {
          this.$emit("update:code", "");
        } else {
          this.$emit("update:code", this.code.slice(0, -1));
        }
      }
    },
    handleInput(k, v) {
      let ov = v.replace(/[^0,1,2,3,4,5,6,7,8,9]/g, "");
      if (!ov) {
        return;
      }
      let n = "";
      n = this.code.toString();
      const ik = "payInput" + (k + 1);
      if (n[k]) {
        const iv = ov.slice(-1, ov.length);
        let a = n.split("");
        a[k] = iv;
        n = a.join("");
        this.$emit("update:code", n);
        return;
      } else {
        n += ov;
      }
      this.$emit("update:code", n);
    },
    handlePayInputFocus(n) {
      this.$refs[n][0].focus();
    }
  }
};
</script>
<style lang="scss" scoped>
.pay-code {
  display: flex;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 4px;
  &:focus-within {
    outline: none;
    color: #ffffff;
    border-color: #f56c6c;
  }
}
</style>
<style lang="scss">
.pay-code {
  .el-input__inner {
    padding: 0;
    width: 60px;
    text-align: center;
    border-radius: 0px;
    border-color: transparent;
  }
  .el-input.pay-code-after::after {
    content: "|";
    color: #000;
    position: absolute;
    bottom: 0;
    right: 1px;
  }
  .last-pay {
    & .el-input__inner {
      border-radius: 0 4px 4px 0;
    }
  }
  .first-pay {
    & .el-input__inner {
      border-radius: 4px 0 0 4px;
    }
  }
}
.el-form-item.is-error.pay-code {
  .el-input__inner {
    border-color: transparent;
  }
  .pay-code {
    border-color: #f56c6c;
  }
}
</style>