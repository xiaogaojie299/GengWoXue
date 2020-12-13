export function myAlert(title = "", content = "") {
  this.$alert(content, title, {
    confirmButtonText: "确定",
    callback: (action) => {
      //   this.$message({
      //     type: 'info'
      //   });
      //   message: `action: ${ action }`
    },
  });
}
export function myMessage(message, type = "success") {
  this.$message({
    message,
    type,
  });
}
