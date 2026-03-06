import React from 'react';

export default function About() {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem', lineHeight: 1.6 }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center', color: '#ffffff' }}>
        About This App
      </h2>

      <p>
        Welcome to <strong>ToDo App</strong> — your simple and elegant solution for staying organized and productive.
        With this app, you can effortlessly create, edit, and manage your tasks, keeping your day structured and stress-free.
      </p>

      <p>
        Whether you're a student, professional, or someone who just wants to keep track of daily activities,
        this app provides a clean, user-friendly interface designed to help you focus on what matters most.
      </p>

      <p>
        Explore the features, customize your task lists, and take control of your time.
        Stay on top of your to-dos, boost your productivity, and enjoy the process!
      </p>

      <p style={{ textAlign: 'center', marginTop: '2rem', fontStyle: 'italic', color: '#555' }}>
        “Organize your tasks, simplify your life.”
      </p>
    </div>
  );
}
