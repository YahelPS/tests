const { plugins, getModule, patcher } = window.enmity;

plugins.registerPlugin({
  name: "Greeter",
  patches: [],
  onStart() {
    alert("Hello World!");
  },
  onStop() {
    alert("Goodbye World!");
  },
});
