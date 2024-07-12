let mentors = [
    {
        Image:'../Component/Avatar.png',
        Name:'Agnes Amanta',
        Position:'Founder & CEO',
        Role:'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.'
    },
    {
        Image:'../Component/Avatar (1).png',
        Name:'Kajen Permadi',
        Position:'Engineering Manager',
        Role:'Lead engineering teams at Figma, Pitch, and Protocol Labs.'
    },
    {
        Image:'../Component/Avatar (2).png',
        Name:'Natsir Naradi',
        Position:'Product Manager',
        Role:'Former PM for Linear, Lambda School, and On Deck.'
    },
    {
        Image:'../Component/Avatar (3).png',
        Name:'Rahimah Gilda',
        Position:'Frontend Developer',
        Role:'Former frontend dev for Linear, Coinbase, and Postscript.'
    },
    {
        Image:'../Component/Avatar (4).png',
        Name:'Suartini Novi',
        Position:'Backend Developer',
        Role:'Lead backend dev at Clearbit. Former Clearbit and Loom.'
    },
    {
        Image:'../Component/Avatar (5).png',
        Name:'Hannah Airlangga',
        Position:'Product Designer',
        Role:'Founding design team at Figma. Former Pleo, Stripe, and Tile.'
    },
    {
        Image:'../Component/Avatar (6).png',
        Name:'Firman Kurniawan',
        Position:'UX Researcher',
        Role:'Lead user research for Slack. Contractor for Netflix and Udacity.'
    },
    {
        Image:'../Component/Avatar (7).png',
        Name:'Mario Agustinus',
        Position:'Customer Success',
        Role:'Lead CX at Wealthsimple. Former PagerDuty and Sqreen.'
    },
];

function renderMentorCards(){
    const mentorListDiv = document.getElementById('mentor-list');
    mentorListDiv.innerHTML = '';

    mentors.forEach(mentor => {
        const mentorCard = `
            <div class="flex flex-col items-center justify-center w-[280px] h-[316px] bg-[#F9FAFB] p-[24px] space-y-[20px] ">
                <img
                    alt="Profile Picture"
                    src="${mentor.Image}"
                    class="w-[80px] h-[80px]"
                />
                <div class="flex flex-col justify-center items-center w-[232px] h-[52px] mb-4">
                    <p class="text-[18px] font-semibold text-[#101828] text-center">
                        ${mentor.Name}
                    </p>
                    <p class="text-[16px] font-regular text-[#6941C6] text-center">
                        ${mentor.Position}
                    </p>
                </div>
                <div class="flex flex-col justify-center items-center w-[232px] h-[72px] mb-4">
                    <p class="text-md font-regular text-[#667085] text-center">
                        ${mentor.Role}
                    </p>
                </div>
                <div class="flex items-center justify-center space-x-4 md:space-x-10">
                    <a href="#">
                        <img
                            alt="Twitter"
                            src="../Component/Social icon.png"
                        />
                    </a>
                    <a href="#">
                        <img
                            alt="LinkedIn"
                            src="../Component/Social icon (1).png"
                        />
                    </a>
                    <a href="#">
                        <img
                            alt="Dribbble"
                            src="../Component/Social icon (2).png"
                        />
                    </a>
                </div>
            </div>
        `
        mentorListDiv.innerHTML += mentorCard;
    });
}

window.onload = renderMentorCards;