import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-center"
      style={
        {
          "--normal-bg": "#1e293b",
          "--normal-text": "#f8fafc",
          "--normal-border": "#334155",
          "--success-bg": "#16a34a",
          "--success-text": "#16a34a",
          "--error-bg": "#dc2626",
          "--error-text": "#dc2626",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
