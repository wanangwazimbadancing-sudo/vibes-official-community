import { useRef, useState } from "react"
import { Link } from "react-router-dom"

const Verification = () => {
  const [code, setCode] = useState(Array(6).fill(""))
  const inputs = useRef([])

  const updateDigit = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1)

    setCode((current) => {
      const next = [...current]
      next[index] = digit
      return next
    })

    if (digit && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (event) => {
    event.preventDefault()
    const digits = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)

    if (!digits) return

    setCode((current) => {
      const next = [...current]
      digits.split("").forEach((digit, index) => {
        next[index] = digit
      })
      return next
    })

    inputs.current[Math.min(digits.length, 6) - 1]?.focus()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (

<>
      <div className="w-full flex fixed top-4 left-4">
        <Link to="/" className="logo text-lg" aria-label="OnTrib home">OnTrib</Link>
      </div>



    <div className="grid place-items-center w-[100vw] h-[100dvh]">


<div>

          
      <form
        className=" h-[fit-content] text-gray-500 max-w-96 mx-4 md:py-10 md:px-6 px-4 py-8 text-left text-sm"
        onSubmit={handleSubmit}
      >
        <fieldset>
            <h1 className=" text-2xl font-semibold mb-6 text-center text-gray-800">Email Verify OTP</h1>
          <legend className="sr-only text-[#1f1f1f]">Please enter the authentication code</legend>
          <div className="flex items-center justify-between mb-6 gap-2">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputs.current[index] = element
                }}
                className="otp-input w-10 h-10 border border-gray-300 outline-none rounded text-center text-lg focus:border-gray-700/60 transition duration-300"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                aria-label={`Digit ${index + 1}`}
                required
                onChange={(event) => updateDigit(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                onPaste={handlePaste}
              />
            ))}
          </div>
 {code.every(Boolean) ?( <Link to="/auth" type="submit" className="w-full my-1 bg-black py-2.5 rounded text-white active:scale-95 transition disabled:cursor-not-allowed disabled:opacity-50" >Verify</Link>):(<p className="cursor-pointer">resend</p>)}
        </fieldset>
      </form>
</div>



    </div>

</>
  )
}

export default Verification
