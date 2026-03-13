document.addEventListener("nav", () => {
  const el = document.querySelector(".typewriter") as HTMLElement
  if (!el) return

  const text = el.dataset.text ?? ""
  const cursor = document.querySelector(".typewriter-cursor") as HTMLElement
  el.textContent = ""
  if (cursor) cursor.classList.remove("hidden")

  let i = 0
  const interval = setInterval(() => {
    el.textContent = text.slice(0, ++i)
    if (i >= text.length) {
      clearInterval(interval)
      // 打字完成后光标闪烁 2 秒后隐藏
      setTimeout(() => {
        if (cursor) cursor.classList.add("hidden")
      }, 2000)
    }
  }, 100)
})
