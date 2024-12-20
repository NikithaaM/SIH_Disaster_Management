import React, { useState } from 'react';

const CounsellingSession = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
        issue: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.name.trim()) formErrors.name = 'Name is required';
        if (!formData.address.trim()) formErrors.address = 'Address is required';
        if (!formData.phoneNumber.trim()) {
            formErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            formErrors.phoneNumber = 'Phone number must be 10 digits';
        }

        if (!formData.email.trim()) {
            formErrors.email = 'Email is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
            formErrors.email = 'Email must be a valid Gmail address';
        }

        if (!formData.issue.trim()) {
            formErrors.issue = 'Issue description is required';
        }

        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload on form submission
        const formValidationErrors = validateForm();
    
        if (Object.keys(formValidationErrors).length === 0) {
            console.log('Form data is valid:', formData);
            try {
                const response = await fetch('http://localhost:5060/api/sessions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
    
                console.log('Response from server:', response);
    
                if (response.ok) {
                    console.log('Form submitted successfully');
                    setIsSubmitted(true);
                    setFormData({
                        name: '',
                        address: '',
                        phoneNumber: '',
                        email: '',
                        issue: ''
                    });
                } else {
                    console.error('Failed to submit form. Status:', response.status);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        } else {
            console.log('Form validation errors:', formValidationErrors);
            setErrors(formValidationErrors);
            setIsSubmitted(false);
        }
    };
    
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
            <h1>Counselling Session</h1>
            <p>Please fill out the form to request a counselling session.</p>
            
            {isSubmitted && <p style={{ color: 'green', fontWeight: 'bold' }}>Form Submitted Successfully!</p>}
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

                <input
                    type="text"
                    name="address"
                    placeholder="Your Address"
                    value={formData.address}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}

                <input
                    type="email"
                    name="email"
                    placeholder="Gmail Address"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                <textarea
                    name="issue"
                    placeholder="Describe the issue that needs to be addressed"
                    value={formData.issue}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px' }}
                />
                {errors.issue && <p style={{ color: 'red' }}>{errors.issue}</p>}

                <button type="submit" style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default CounsellingSession;
