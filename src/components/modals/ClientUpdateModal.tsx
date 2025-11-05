"use client";

// Modal pour les mises à jour client
// Contient un formulaire avec nom, email, type (Client / Partner / Other), message

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { T } from "@/lib/i18n";

interface ClientUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientUpdateModal({
  isOpen,
  onClose,
}: ClientUpdateModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Client",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/forms/client-update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit form");
      }

      // Reset form and close modal
      setFormData({
        name: "",
        email: "",
        type: "Client",
        message: "",
      });
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error instanceof Error ? error.message : "Failed to submit form"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-4 sm:p-6 text-left align-middle shadow-xl transition-all mx-4">
                {/* Header avec bouton close */}
                <div className="flex justify-between items-start mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-xl sm:text-2xl font-bold text-black pr-2"
                  >
                    {T("Stay Informed")}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label="Close"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Formulaire */}
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {T("Name")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {T("Email")} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>

                    {/* I am a */}
                    <div>
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {T("I am a")} *
                      </label>
                      <select
                        id="type"
                        value={formData.type}
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="Client">{T("Client")}</option>
                        <option value="Partner">{T("Partner")}</option>
                        <option value="Other">{T("Other")}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {T("Message (Optional)")}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder={T(
                          "Tell us about your project or interests"
                        )}
                      />
                    </div>

                    {/* Privacy note */}
                    <p className="text-xs text-gray-500">
                      {T(
                        "We respect your privacy. Your information will only be used to contact you about CONTRACT-IT."
                      )}
                    </p>

                    {/* Error message */}
                    {submitError && (
                      <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
                        {submitError}
                      </div>
                    )}

                    {/* Boutons */}
                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        className="btn-secondary flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? T("Submitting...") : T("Submit")}
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="btn-outline flex-1"
                        disabled={isSubmitting}
                      >
                        {T("Cancel")}
                      </button>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
