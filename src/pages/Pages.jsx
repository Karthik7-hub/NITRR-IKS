import React from 'react';
import { useTheme } from '../context/ThemeContext';

const PageLayout = ({ title, subtitle, children }) => (
    <div className="container page-content">
        <h1 className="section-title">{title}</h1>
        <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: 'gray' }}>{subtitle}</p>
        {children}
    </div>
);

export const People = () => (
    <PageLayout title="Our People" subtitle="Faculty, Coordinators, and Student Volunteers">
        <div className="grid-layout">
            <p>Content for Faculty list goes here...</p>
            <p>Content for Student list goes here...</p>
        </div>
    </PageLayout>
);

export const Academics = () => (
    <PageLayout title="Academics" subtitle="Courses and Curriculum">
        <ul>
            <li>Open Elective: Science & Tech in Ancient India</li>
            <li>Value Added Course: Vastu Shastra for Engineers</li>
        </ul>
    </PageLayout>
);

export const Research = () => (
    <PageLayout title="Research Projects & Labs" subtitle="Ongoing and Completed Gaveshana">
        <div style={{ display: 'grid', gap: '20px' }}>
            <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
                <h3>Project: Ancient Water Management</h3>
                <p>Funding Agency: AICTE</p>
            </div>
        </div>
    </PageLayout>
);

export const Repository = () => (
    <PageLayout title="Knowledge Repository" subtitle="Digital Library and Manuscripts">
        <p>Access to digitized manuscripts and IKS lectures will be available here.</p>
    </PageLayout>
);

export const News = () => (
    <PageLayout title="Upcoming & In News" subtitle="Events, Workshops, and Announcements">
        <p>No upcoming events at the moment.</p>
    </PageLayout>
);

export const Collaborators = () => (
    <PageLayout title="Collaborators" subtitle="Partner Institutes and Organizations">
        <p>IIT Kharagpur IKS Center</p>
        <p>Bhandarkar Oriental Research Institute</p>
    </PageLayout>
);