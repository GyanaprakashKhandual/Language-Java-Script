function scorePassword(p) {
    const reasons = [];
    if (!p || p.length === 0) {
        return { result: 'Weak', score: 0, reasons: ['Empty password'] };
    }

    let score = 0;

    if (p.length >= 8) score += 25;
    else reasons.push('Minimum 8 chars');

    if (/[A-Z]/.test(p)) score += 15;
    else reasons.push('Add an uppercase letter');

    if (/[a-z]/.test(p)) score += 15;
    else reasons.push('Add a lowercase letter');

    if (/[0-9]/.test(p)) score += 15;
    else reasons.push('Add a digit');

    if (/[^A-Za-z0-9]/.test(p)) score += 20;
    else reasons.push('Add a special character');

    if (!/\s/.test(p)) score += 10; // penalty if spaces present
    else reasons.push('Remove spaces');

    // clamp
    if (score > 100) score = 100;

    return {
        result: score >= 70 ? 'Strong' : 'Weak',
        score,
        reasons
    };
}

function evaluatePasswords(passwords) {
    return passwords.map(p => ({ password: p, ...scorePassword(p) }));
}

// Example
console.log(evaluatePasswords(['Gyana@123', 'Thisisme', 'sefj0ea@345']));
