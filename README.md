Sure, here's a detailed repository description for your "Buy Me a Coffee" website:

---

# Buy Me a Coffee ☕️

A modern and intuitive platform for supporters to buy you a coffee as a token of appreciation. This project is built with Next.js, TypeScript, and MongoDB, providing a seamless user experience for both creators and supporters.

## Features

- **User Authentication**: Secure login with Google using NextAuth.
- **Donations**: Supporters can buy coffee and leave messages.
- **Dashboard**: Creators can view their supporters and messages.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **MongoDB Integration**: Stores user and donation data securely.

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Database**: MongoDB
- **Authentication**: NextAuth with Google Provider
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/buy-me-a-coffee.git
   cd buy-me-a-coffee
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   MONGODB_URI=your-mongodb-uri
   ```

4. **Run the development server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- **`/pages`**: Contains all the pages of the application.
- **`/components`**: Reusable components used throughout the application.
- **`/lib`**: Library files, such as database configuration.
- **`/styles`**: Global styles and Tailwind CSS configurations.
- **`/api`**: API routes for handling backend logic.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out .

---

