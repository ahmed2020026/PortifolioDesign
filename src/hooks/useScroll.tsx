export const ScrollTo = (e: string) => {
    document.getElementById(e)?.scrollIntoView({ behavior: "smooth" })
}