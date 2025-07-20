const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function testAppointmentAPI() {
    try {
        console.log('🧪 Testing appointment API...');

        const testData = {
            name: 'Test Patient',
            email: 'birahadeesh05@gmail.com',
            phone: '1234567890',
            date: '2024-12-19',
            message: 'Test appointment from API'
        };

        const response = await fetch('http://localhost:3000/api/appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData)
        });

        const result = await response.json();

        console.log('📊 Response Status:', response.status);
        console.log('📊 Response:', result);

        if (result.success) {
            console.log('✅ API test successful!');
        } else {
            console.log('❌ API test failed:', result.message);
        }

    } catch (error) {
        console.error('❌ API test error:', error.message);
    }
}

testAppointmentAPI(); 