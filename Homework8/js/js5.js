const complexHref = document.getElementsByTagName("a");

for (const item of complexHref) {
  item.addEventListener("mouseover", av, {
    once: true,
  });

  item.addEventListener("mouseout ", av, {
	 once: false,
  });
}
function av(event) {
  event.target.innerText = `${event.target.innerText} ${"(  " + event.target.href + "  )"}`;
}