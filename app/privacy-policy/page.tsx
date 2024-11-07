export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex mt-2 ml-5 relative">
        <span className="h-16 w-16 top-[-.85rem] left-[-.5rem] rounded-full bg-colorSecondary absolute"></span>
        <span className="z-10 text-2xl max-sm:text-xl font-bold text-colorSecondary font-serif">
          <span className="text-white">mute</span> on location
        </span>
      </div>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Privacy Policy for Mute On Location
        </h1>
        <span className="block text-sm text-gray-500 mb-8">
          Effective Date: Nov 8, 2024 12:00:00 IST
        </span>

        <h2 className="text-2xl font-semibold mb-6">
          Thank you for choosing Mute On Location!
        </h2>
        <p className="mb-6">
          This Privacy Policy outlines the data we collect, how we use it, and
          your choices regarding your information when using our app.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          1. Information Collection and Use
        </h3>
        <p className="mb-6">
          Mute On Location is designed to provide location-based notification
          muting. To deliver the service, we may require access to specific data
          as outlined below. We collect and use only the necessary data to
          achieve these functionalities and do not store, share, or misuse any
          collected information.
        </p>

        <h3 className="text-lg font-semibold mb-2">Information We Collect</h3>
        <ul className="list-disc list-inside space-y-4 mb-8">
          <li>
            <h4 className="font-semibold">Location Data</h4>
            <p>
              Mute On Location collects location data to determine whether you
              are in a saved location and to mute notifications accordingly.
              Your location data is only processed locally on your device.
            </p>
          </li>
          <li>
            <h4 className="font-semibold">Phone State</h4>
            <p>
              We request access to phone state and call information to detect
              incoming calls. This allows us to unmute notifications for
              important contacts that you define.
            </p>
          </li>
          <li>
            <h4 className="font-semibold">Contact Numbers (Optional)</h4>
            <p>
              You may choose to allow the app to access certain contacts to
              specify numbers for which the app will automatically unmute
              notifications. This information remains on your device and is not
              transmitted or stored by Mute On Location.
            </p>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">2. Permissions Required</h3>
        <p className="mb-6">
          To provide the app's functionality, Mute On Location requests the
          following permissions:
        </p>

        <ul className="list-disc list-inside space-y-4 mb-8">
          <li>
            <h4 className="font-semibold">Location Access</h4>
            <p>
              Required to detect when you arrive at or leave a saved location.
            </p>
          </li>
          <li>
            <h4 className="font-semibold">Phone State Access</h4>
            <p>
              Required to detect incoming calls and enable automatic unmuting
              for important contacts.
            </p>
          </li>
          <li>
            <h4 className="font-semibold">Notification Access</h4>
            <p>
              Required to mute or unmute notifications based on location or
              incoming call events.
            </p>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">3. Data Security</h3>
        <p className="mb-6">
          We prioritize your data privacy and security. Mute On Location does
          not collect, store, or share any personal information on our servers.
          All data processing occurs locally on your device, and we do not store
          any information about your location or call data externally.
        </p>

        <h3 className="text-xl font-semibold mb-4">4. Third-Party Services</h3>
        <p className="mb-6">
          Mute On Location does not integrate with third-party analytics or
          advertising services. We are committed to keeping your data secure and
          private within the app environment.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          5. Changes to This Privacy Policy
        </h3>
        <p className="mb-6">
          We may update our Privacy Policy periodically to reflect changes in
          functionality or legal requirements. Changes will be communicated
          through the app, and we encourage you to review this policy regularly.
        </p>

        <h3 className="text-xl font-semibold mb-4">6. Contact Us</h3>
        <p className="mb-4">
          For questions or concerns about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:dipankajsingh25@gmail.com"
            className="text-blue-600 underline"
          >
            dipankajsingh25@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
