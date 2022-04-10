const { plugins, getModule, patcher } = window.enmity;

plugins.registerPlugin({
  name: "Greeter",
  onStart() {
    alert("Hello World!");
  },
  onStop() {
    alert("Goodbye World!");
  },
});
