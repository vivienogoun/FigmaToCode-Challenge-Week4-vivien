import { useState } from "react"
import { useTheme } from "next-themes"

import { SocialButtons } from "../social-buttons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

export function ContactMe() {
  const { theme } = useTheme()
  const [formdata, setFormdata] = useState({
    fullname: "",
    email: "",
    website: "",
    message: "",
  })
  const [error, setError] = useState({
    email: false,
    message: false,
  })
  const [disabled, setDisabled] = useState(false)
  const handleClick = () => {
    setError({
      email: false,
      message: false,
    })
    if (formdata.email.length == 0) {
      setError({ email: true, message: false })
    } else if (formdata.message.length == 0) {
      setError({ email: false, message: true })
    } else {
      setDisabled(true)
    }
  }
  const handleReset = () => {
    setFormdata({
      fullname: "",
      email: "",
      website: "",
      message: "",
    })
    setDisabled(false)
  }
  return (
    <div
      id="contact-me"
      className="md:centered flex flex-col items-start justify-start px-4 py-10 md:px-12 md:py-14"
    >
      <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
        <div className="display-text-m md:display-text flex w-full items-center justify-center gap-4 py-5 text-foreground">
          <span>Contact</span>
          <span className="font-extrabold">Me</span>
        </div>
        <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between md:gap-20 md:px-8">
          <div className="flex w-full flex-col items-start justify-center gap-5 py-5">
            <Input
              type="text"
              placeholder="Your name"
              value={formdata.fullname}
              disabled={disabled}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  fullname: e.target.value,
                })
              }
            />
            <Input
              type="email"
              placeholder="Email"
              variant={error.email ? "error" : "default"}
              error={error.email}
              disabled={disabled}
              value={formdata.email}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  email: e.target.value,
                })
              }
            />
            <Input
              type="url"
              placeholder="Your website (if exists)"
              disabled={disabled}
              value={formdata.website}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  website: e.target.value,
                })
              }
            />
            <Textarea
              placeholder="How can i help ?"
              disabled={disabled}
              value={formdata.message}
              variant={error.message ? "error" : "default"}
              error={error.message}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  message: e.target.value,
                })
              }
            />
            <div className="flex w-full items-center justify-between">
              {disabled ? (
                <Button onClick={handleReset}>Reset</Button>
              ) : (
                <Button onClick={handleClick} disabled={disabled}>
                  Get In Touch
                </Button>
              )}
              <SocialButtons className="hidden lg:flex" />
            </div>
            <SocialButtons className="flex lg:hidden" />
          </div>
          <div className="flex flex-col items-start justify-center gap-8 py-5">
            <div className="flex flex-col items-start justify-center gap-3">
              <div className="flex items-start justify-start gap-4">
                <span className="display-text-m md:display-text font-extrabold text-foreground">
                  Let&apos;s
                </span>
                <span className="heading3 md:display-text outlined font-extrabold">
                  talk
                </span>
                <span className="display-text-m md:display-text font-extrabold text-foreground">
                  for
                </span>
              </div>
              <div className="display-text-m md:display-text font-extrabold text-foreground">
                Something special
              </div>
            </div>
            <div
              className={`paragraph2 ${
                theme == "dark" ? "text-zinc-200" : "text-zinc-500"
              }`}
            >
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </div>
            <div className="heading5 md:heading3 flex flex-col items-start justify-center gap-3 font-bold text-foreground md:font-semibold">
              <div>vivienogoun1@gmail.com</div>
              <div>9876543210</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
