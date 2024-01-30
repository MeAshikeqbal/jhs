import Link from 'next/link'
import React from 'react'

const Terms = () => {
    return (
        <div
            className='p-3 max-w-6xl mx-auto'
        >
            <h1
                className='font-bold text-center text-gray-900 text-lg'
            >Terms and Conditions for Photo Sharing on Jalalpur High School (H.S) Website</h1>

            <p
            className='text-justify text-gray-800'
            >
                Welcome to the Jalalpur High School (H.S) website! We are excited to provide a platform for our students to share their photos and celebrate their achievements. Before you start sharing photos, please read and agree to the following terms and conditions:
            </p>
            <ol
            className='text-justify text-gray-800'
            >
                <li
                className='font-bold'
                >
                    1. Photo Submission:
                    <ul
                    className='font-normal text-gray-800 py-2'
                    >
                        <li>
                            By submitting a photo, you affirm that you are the rightful owner of the photo and have the necessary permissions to share it publicly on the Jalalpur High School (H.S) website.
                        </li>
                        <li>
                            Photos should be appropriate, respectful, and adhere to the guidelines and values of Jalalpur High School (H.S).
                        </li>
                    </ul>
                </li>

                <li
                className='font-bold'
                >
                    2. Public Sharing:
                    <ul
                    className='font-normal text-gray-800 py-2'
                    >
                        <li>
                            Submitted photos may be shared publicly on the Jalalpur High School (H.S) website, social media accounts, and other promotional materials.
                        </li>
                        <li>
                            Jalalpur High School (H.S) reserves the right to review, edit, or remove any photo that violates our guidelines or standards.
                        </li>
                    </ul>
                </li>
                <li
                className='font-bold'
                >
                    3. Privacy and Consent:
                    <ul
                    className='font-normal text-gray-800 py-2'
                    >
                        <li>
                            By submitting a photo, you grant Jalalpur High School (H.S) the right to use, reproduce, and distribute the photo for promotional and educational purposes.
                        </li>
                        <li>
                            It is the responsibility of the person submitting the photo to ensure that they have obtained the necessary consent from individuals featured in the photo, especially if they are minors.
                        </li>
                    </ul>
                </li>
                <li
                className='font-bold'
                >
                    4. Guidelines for Submitted Photos:
                    <ul
                    className='font-normal text-gray-800 py-2'
                    >
                        <li>
                            Photos should focus on positive and school-related activities, such as events, achievements, and educational experiences.
                        </li>
                        <li>
                            Avoid submitting photos that may be considered offensive, inappropriate, or infringe on the rights of others.
                        </li>
                    </ul>
                </li>
                <li
                className='font-bold'
                >
                    5. Ownership and Copyright:
                    <ul
                    className='font-normal text-gray-800 py-2'
                    >
                        <li>
                            You retain ownership of the photos you submit. However, by submitting a photo, you grant Jalalpur High School (H.S) a non-exclusive, royalty-free license to use, display, and distribute the photo.
                        </li>
                    </ul>
                </li>
                <li
                className='font-bold'
                >
                    6. Compliance with Laws:
                    <ul
                    className='font-normal text-gray-800 py-2'
                    >
                        <li>
                            Users must comply with all applicable laws and regulations when submitting photos. This includes, but is not limited to, laws related to privacy, copyright, and
                            defamation.
                        </li>
                    </ul>
                </li>
                <li
                className='font-bold'
                >
                    7. Moderation and Removal:
                    <ul
                    className='font-normal text-gray-800 py-2'
                    >
                        <li>
                            Jalalpur High School (H.S) reserves the right to moderate, edit, or remove any submitted photo without notice if it violates these terms and conditions or if it is deemed inappropriate.
                        </li>
                    </ul>
                </li>
                <li
                className='font-bold'
                >
                    8. Indemnification:
                    <ul
                    className='font-normal text-gray-800 py-2'
                    >
                        <li>
                            You agree to indemnify and hold Jalalpur High School (H.S), its staff, and affiliates harmless from any claims, damages, or liabilities arising out of your submission of photos or your violation of these terms.
                        </li>
                    </ul>
                </li>
                <li
                className='font-bold'
                >
                    9. Changes to Terms:
                    <ul
                    className='font-normal text-gray-800 py-2'
                    >
                        <li>
                            Jalalpur High School (H.S) reserves the right to modify or update these terms and conditions at any time. It is your responsibility to review these terms periodically.
                        </li>
                    </ul>
                </li>
                <li
                className='font-bold'
                >
                    10. Contact Information:
                    <ul
                    className='font-normal text-gray-800 py-2'
                    >
                        <li>
                            If you have any questions or concerns regarding the photo sharing terms and conditions, please contact us at &nbsp; 
                            <Link
                            href={"mailto:contact@jalalpurhighschool.com"}
                            className='text-blue-600 hover:text-blue-800'
                            >
                             contact@jalalpurhighschool.com
                            </Link>.
                        </li>
                    </ul>
                </li>
            </ol>
            <p
            className='text-justify text-gray-800'
            >
                By submitting a photo on the Jalalpur High School (H.S) website, you acknowledge that you have read, understood, and agreed to abide by these terms and conditions. Thank you for contributing to the Jalalpur High School (H.S) community!
            </p>
        </div>
    )
}

export default Terms