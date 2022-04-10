function s(t) {
  window.enmity.plugins.registerPlugin(t);
}
function a(t, e = !0) {
  return window.enmity.getModule(t, e);
}
function u(t) {
  return window.enmity.patcher.create(t);
}
const n = a((t) => {
    var e;
    return (e = t.default) == null
      ? void 0
      : e.displayName === "MessageContextMenu";
  }),
  g = {
    name: "SilentTyping",
    patches: [],
    onStart() {
      const t = u("silent-typing");
      t.after(n.default, "startTyping", (e, i, r) => {
        alert(JSON.stringify(i));
      }),
        this.patches.push(t);
    },
    onStop() {
      this.patches = [];
    },
  };
s(g);
