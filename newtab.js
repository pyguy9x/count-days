// const startDate = '2023-08-28'; // ngày Mạnh tuấn bắt đầu làm video tiktok
const startDate = '2024-07-14'; // ngày tôi bắt đầu lại video
const timeDiff = new Date() - new Date(startDate);
const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
// const daysBetween = (date1, date2) => Math.abs(new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24);
const daysBetween = (date) => Math.abs(new Date() - new Date(date)) / (1000 * 60 * 60 * 24);

// demngay = daysBetween(Date(), '2024-12-31')
demngaytohientai = Math.round(daysBetween('2024-07-31')); // DEADLINE HERE

document.getElementById('days').textContent  = daysDiff;
// document.getElementById('info2').textContent = "(from "+startDate+")";
// document.getElementById('info2').textContent = demngaytohientai + ' days left to Deadline';
document.getElementById('info2').textContent = `${demngaytohientai} day${demngaytohientai > 1 ? 's' : ''}`+' left to Deadline' ;

// -----

const startDate1 = '2024-07-04';
const startDateObj = new Date(startDate1);
const currentDate = new Date();


function calculateDetailedDifference(start, end) {
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const adjustedStartDate = new Date(start);
    adjustedStartDate.setFullYear(start.getFullYear() + years);
    adjustedStartDate.setMonth(start.getMonth() + months);
    let remainingDays = Math.floor((end - adjustedStartDate) / (1000 * 60 * 60 * 24));

    const weeks = Math.floor(remainingDays / 7);
    remainingDays = remainingDays % 7;

    return {
        years: years,
        months: months,
        weeks: weeks,
        days: remainingDays
    };
}

const outputElement = document.getElementById('info');
const IsFA = true; // Change this to false if you're in a relationship

if (IsFA) {
    outputElement.textContent = "No lover, no love days, my fen!";
} else {
    const detailedDifference = calculateDetailedDifference(startDateObj, currentDate);
    const { years, months, weeks, days } = detailedDifference;

    outputElement.textContent =
        `${years} year${years > 1 ? 's' : ''}, ` +
        `${months} month${months > 1 ? 's' : ''}, ` +
        `${weeks} week${weeks > 1 ? 's' : ''}, ` +
        `${days} day${days > 1 ? 's' : ''}`;
}

// ----------- Quote -------------
        // Danh sách các câu nói hay nhất của John D. Rockefeller
        const rockefellerQuotes = [
            "Don't be afraid to give up the good to go for the great.",
            "I always tried to turn every disaster into an opportunity.",
            "If you want to succeed you should strike out on new paths, rather than travel the worn paths of accepted success.",
            "Good management consists in showing average people how to do the work of superior people.",
            "I believe that every right implies a responsibility; every opportunity, an obligation; every possession, a duty.",
            "Charity is injurious unless it helps the recipient to become independent of it.",
            "I would rather earn 1% off a 100 people's efforts than 100% of my own efforts.",
            "The secret of success is to do the common thing uncommonly well.",
            "A friendship founded on business is better than a business founded on friendship.",
            "If your only goal is to become rich, you will never achieve it.",
            "Do not many of us who fail to achieve big things ... fail because we lack concentration - the art of concentrating the mind on the thing to be done at the proper time and to the exclusion of everything else?",
            "I believe in the dignity of labor, whether with head or hand; that the world owes no man a living but that it owes every man an opportunity to make a living.",
            "The way to make money is to buy when blood is running in the streets.",
            "Singleness of purpose is one of the chief essentials for success in life, no matter what may be one's aim.",
            "Success comes from keeping the ears open and the mouth closed.",
            "I would rather hire a man with enthusiasm, than a man who knows everything.",
            "Next to doing the right thing, the most important thing is to let people know you are doing the right thing.",
            "Don't blame the marketing department. The buck stops with the chief executive.",
            "It is wrong to assume that men of immense wealth are always happy.",
            "Go as far as you can see; when you get there, you'll be able to see farther.",
            "There is nothing in this world that can compare with the Christian fellowship; nothing that can satisfy but Christ.",
            "Giving should be entered into in just the same way as investing. Giving is investing.",
            "I know of nothing more despicable and pathetic than a man who devotes all the hours of the waking day to the making of money for money's sake.",
            "The only question with wealth is, what do you do with it?",
            "The man who starts out simply with the idea of getting rich won’t succeed; you must have a larger ambition.",
            "I do not think that there is any other quality so essential to success of any kind as the quality of perseverance. It overcomes almost everything, even nature.",
            "I had no ambition to make a fortune. Mere money-making has never been my goal, I had an ambition to build.",
            "The ability to deal with people is as purchasable a commodity as sugar or coffee, and I will pay more for that ability than for any other under the sun.",
            "Every right implies a responsibility; Every opportunity, an obligation, Every possession, a duty.",
            "I would rather earn 1% off a 100 people's efforts than 100% of my own efforts.",
            "I believe that thrift is essential to well-ordered living.",
            "I always try to turn every disaster into an opportunity.",
            "The most important thing for a young man is to establish a credit... a reputation, character.",
            "It is very important to remember what other people tell you, not so much what you yourself already know.",
            "I do not think there is any other quality so essential to success of any kind as the quality of perseverance. It overcomes almost everything, even nature.",
            "I believe in the supreme worth of the individual and in his right to life, liberty, and the pursuit of happiness.",
            "The person who starts out simply with the idea of getting rich won’t succeed; you must have a larger ambition.",
            "The secret to success is to do the common things uncommonly well.",
            "Competition is a sin.",
            "If your only goal is to become rich, you will never achieve it.",
            "I would rather earn 1% off a 100 people's efforts than 100% of my own efforts.",
            "The way to make money is to buy when blood is running in the streets.",
            "A friendship founded on business is better than a business founded on friendship.",
            "I always tried to turn every disaster into an opportunity.",
            "I believe that every right implies a responsibility; every opportunity, an obligation; every possession, a duty.",
            "Good management consists in showing average people how to do the work of superior people.",
            "Singleness of purpose is one of the chief essentials for success in life, no matter what may be one's aim.",
            "Don't be afraid to give up the good to go for the great.",
            "I would rather hire a man with enthusiasm, than a man who knows everything.",
            "Next to doing the right thing, the most important thing is to let people know you are doing the right thing."
        ];

        // Hàm lấy ngẫu nhiên n phần tử từ mảng
        function getRandomQuotes(quotes, n) {
            const shuffled = quotes.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, n);
        }

        // Lấy ngẫu nhiên 50 câu nói
        const randomQuotes = getRandomQuotes(rockefellerQuotes, 1);

        // Lấy phần tử container để chứa các câu nói
        const quotesContainer = document.getElementById('quotesContainer');

        // Tạo và thêm các thẻ div chứa câu nói vào container
        randomQuotes.forEach(quote => {
            const div = document.createElement('div');
            div.className = 'quote';
            div.textContent = quote;
            quotesContainer.appendChild(div);
        });
