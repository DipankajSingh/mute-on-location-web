export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 text-gray-700">
      <div className="flex mt-2 ml-5 relative">
        <span className="h-16 w-16 top-[-.85rem] left-[-.5rem] rounded-full bg-colorSecondary absolute"></span>
        <span className="z-10 text-2xl max-sm:text-xl font-bold text-colorSecondary font-serif">
          <span className="text-white">mute</span> on location
        </span>
      </div>
      <h1 className="text-3xl font-semibold text-gray-800">
        Terms of Service for Mute on Location
      </h1>
      <span className="text-sm text-gray-500">Effective Date: Nov 8, 2024</span>

      <h2 className="text-xl font-semibold text-gray-800">
        1. Acceptance of Terms
      </h2>
      <p>
        By downloading, accessing, or using the Mute on Location app, you agree
        to comply with and be bound by these Terms of Service. If you do not
        agree, you may not access or use the app.
      </p>

      <h2 className="text-xl font-semibold text-gray-800">
        2. Description of Service
      </h2>
      <p>
        Mute on Location is a location-based notification muting app that
        automatically adjusts your phone's notification settings based on your
        saved locations and selected contacts. It provides convenient ways to
        manage notifications in different environments, such as muting
        notifications at specified locations and unmuting calls from important
        contacts.
      </p>

      <h2 className="text-xl font-semibold text-gray-800">
        3. User Responsibilities
      </h2>
      <p>
        As a user, you agree to use Mute on Location responsibly and in
        accordance with applicable laws and regulations. You are responsible for
        setting up and managing your saved locations and contact lists
        appropriately.
      </p>

      <h2 className="text-xl font-semibold text-gray-800">4. Permissions</h2>
      <p>
        To provide the intended services, the app requires access to location
        data, phone state, and contact information. By using the app, you
        consent to provide the necessary permissions for the app to function as
        designed. For more information, refer to our{" "}
        <a href="/privacy-policy" className="text-indigo-600 underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold text-gray-800">
        5. Limitation of Liability
      </h2>
      <p>
        Mute on Location and its developers are not liable for any damages
        resulting from the use or inability to use the app. This includes issues
        related to app performance, compatibility, or errors that affect
        notification muting or unmuting features.
      </p>

      <h2 className="text-xl font-semibold text-gray-800">
        6. Modifications to the Service
      </h2>
      <p>
        We reserve the right to modify or discontinue, temporarily or
        permanently, the app or its services without notice. Any updates or
        changes to functionality will be reflected in future releases.
      </p>

      <h2 className="text-xl font-semibold text-gray-800">
        7. Changes to Terms of Service
      </h2>
      <p>
        We may revise these Terms of Service from time to time. You are
        encouraged to review the Terms periodically. Your continued use of the
        app signifies acceptance of any changes.
      </p>

      <h2 className="text-xl font-semibold text-gray-800">
        8. Contact Information
      </h2>
      <p>
        For questions or concerns about these Terms of Service, please contact
        us at{" "}
        <a
          href="mailto:dipankajsingh25@gmail.com"
          className="text-indigo-600 underline"
        >
          dipankajsingh25@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
