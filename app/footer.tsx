/* eslint-disable react/jsx-no-duplicate-props */
import { siteTitle } from "./constants/constants"

const Footer = () => {
    return (
        <footer className="bg-white shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-700">
            <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
                &copy; 2023 <a href="#" className="hover:underline" target="_blank" rel="noopener noreferrer">{siteTitle}</a>. All rights reserved.
            </p>
            <div className="flex justify-center items-center space-x-1">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfes3nzLaKvD6stB4rX0iP2WPp25YS_k1fYxTX2rHq2WbOGvw/viewform" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    お問い合わせ
                </a>
                <a href="https://github.com/orgs/fixmix-hackathon/repositories" data-tooltip-target="tooltip-github" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" >
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span className="sr-only">GitHub</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer