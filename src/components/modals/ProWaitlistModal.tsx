"use client";

// Modal pour la liste d'attente des professionnels
// Contient un formulaire avec nom complet, nom d'entreprise, email, métier, ville/province, expérience

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { T } from "@/lib/i18n";

interface ProWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProWaitlistModal({
  isOpen,
  onClose,
}: ProWaitlistModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    trade: "",
    cityProvince: "",
    experience: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/forms/pro-waitlist", {
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
        fullName: "",
        businessName: "",
        email: "",
        trade: "",
        cityProvince: "",
        experience: "",
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
                    {T("Join Professional Early Access")}
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
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {T("Full Name")} *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {T("Business Name")}
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            businessName: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    {/* Trade */}
                    <div>
                      <label
                        htmlFor="trade"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {T("Trade/Specialty")} *
                      </label>
                      <input
                        type="text"
                        id="trade"
                        required
                        value={formData.trade}
                        onChange={(e) =>
                          setFormData({ ...formData, trade: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={T("e.g., General Contractor, Electrician")}
                      />
                    </div>

                    {/* City/Province */}
                    <div>
                      <label
                        htmlFor="cityProvince"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {T("City/Province")} *
                      </label>
                      <input
                        type="text"
                        id="cityProvince"
                        required
                        value={formData.cityProvince}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cityProvince: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={T("e.g., Montréal, QC")}
                      />
                    </div>

                    {/* Years of Experience */}
                    <div>
                      <label
                        htmlFor="experience"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {T("Years of Experience")}
                      </label>
                      <input
                        type="text"
                        id="experience"
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experience: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className="btn-primary flex-1"
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
