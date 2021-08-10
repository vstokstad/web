import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import React from "react"
export const onServiceWorkerUpdateReady = () => window.location.reload(true);

export const wrapRootElement = ({ element }) => {
	return (
		<GoogleReCaptchaProvider reCaptchaKey="6LftVPUZAAAAAIwqTEu14G3I4gUVmE33M_HoFZLW">
			{element}
		</GoogleReCaptchaProvider>
	)
}