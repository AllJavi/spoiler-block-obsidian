import { Plugin, MarkdownRenderer } from 'obsidian';

export default class SpoilerBlock extends Plugin {
  async onload() {
    console.log("reload");
    this.registerMarkdownCodeBlockProcessor("spoiler-block", (source, el, _) => {
      const container = el.createEl("div");
      container.className = "spoiler";
      
      const rows = source.split("\n");
      for (let row of rows)
        container.createEl("div", {text: row});
      
      container.addEventListener("click", () => {
        if (container.className === "spoiler")
          container.className = "spoiler-show";
      });

      container.addEventListener("dblclick", () => {
        if (container.className === "spoiler-show")
          container.className = "spoiler";
      });
    });
  }
}