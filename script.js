        // Lấy các phần tử HTML
        const messageContainer = document.getElementById('messageContainer');
        const questionContainer = document.getElementById('questionContainer');
        const backgroundMusic = document.getElementById('backgroundMusic');

        // Danh sách các câu chúc tương ứng với các emoji
        const messages = {
            happy: [
                "Chúc các chị em luôn xinh đẹp, tự tin và thành công trong cuộc sống!",
                "Chúc các bạn nữ một ngày 20/10 tràn đầy nụ cười và niềm vui!",
                "Mong rằng mọi ước mơ của các bạn sẽ trở thành hiện thực!",
                "Hãy luôn mỉm cười và lan tỏa niềm vui đến mọi người xung quanh!",
                "Chúc chị em mãi mãi giữ được sự trẻ trung và yêu đời!"
            ],
            love: [
                "Chúc các chị em có một ngày 20/10 thật ngọt ngào và ý nghĩa bên những người yêu thương!",
                "Hy vọng chị em sẽ luôn được trân trọng và yêu thương như các bạn xứng đáng!",
                "Chúc tình yêu và hạnh phúc sẽ luôn đồng hành cùng các bạn!",
                "Mong rằng các bạn sẽ tìm thấy những điều tốt đẹp nhất trong cuộc sống!",
                "Hãy yêu bản thân mình nhiều hơn, bạn xứng đáng với điều đó!"
            ],
            celebrate: [
                "Chúc mừng Ngày Phụ nữ Việt Nam! Các chị em hãy luôn mạnh mẽ và kiên cường!",
                "Hãy cùng nhau tạo nên những kỷ niệm đẹp trong ngày đặc biệt này!",
                "Chúc mọi người luôn tràn đầy sức sống và năng lượng tích cực!",
                "Mỗi ngày đều là một lễ hội, hãy sống hết mình và vui vẻ!",
                "Chúc các chị em luôn tỏa sáng như những ngôi sao trong cuộc sống!"
            ]
        };

        // Danh sách câu hỏi
        const questions = [
            {
                question: "Ngày Phụ nữ Việt Nam được tổ chức vào ngày nào?",
                options: ["20/10", "8/3", "1/5"],
                answer: "20/10"
            },
            {
                question: "Màu sắc nào thường được liên kết với Ngày Phụ nữ?",
                options: ["Đỏ", "Hồng", "Xanh"],
                answer: "Hồng"
            },
            {
                question: "Ai là người phụ nữ đầu tiên trở thành Tổng thống của Việt Nam?",
                options: ["Bà Nguyễn Thị Bình", "Bà Võ Thị Sáu", "Không ai cả"],
                answer: "Không ai cả"
            },
            {
                question: "Ngày Quốc tế Phụ nữ diễn ra vào ngày nào?",
                options: ["20/10", "8/3", "1/6"],
                answer: "8/3"
            },
            {
                question: "Bông hoa nào thường được tặng vào Ngày Phụ nữ?",
                options: ["Hoa hồng", "Hoa cúc", "Hoa lan"],
                answer: "Hoa hồng"
            },
            {
                question: "Ai là người phụ nữ Việt Nam đầu tiên đoạt giải Nobel?",
                options: ["Bà Đoàn Thị Điểm", "Bà Nguyễn Thị Phương Thảo", "Không ai cả"],
                answer: "Không ai cả"
            },
            {
                question: "Phụ nữ có quyền bầu cử ở Việt Nam từ năm nào?",
                options: ["1946", "1954", "1960"],
                answer: "1946"
            },
            {
                question: "Ngày Phụ nữ Việt Nam có ý nghĩa gì?",
                options: ["Tôn vinh vai trò của phụ nữ", "Kỷ niệm ngày thành lập Đảng", "Ngày Quốc tế Lao động"],
                answer: "Tôn vinh vai trò của phụ nữ"
            }
        ];

        // Biến để theo dõi chỉ số câu hỏi hiện tại
        let currentQuestionIndex = 0;
        let selectedEmoji; // Biến để lưu emoji đã chọn

        // Hàm để hiển thị lời chúc
        function displayMessage(message) {
            const messageElement = document.createElement('p');
            messageElement.className = 'message';
            messageElement.innerText = message;
            messageContainer.appendChild(messageElement);
            messageContainer.style.display = 'block';
        }

        // Hàm để hiển thị câu hỏi
        function displayQuestion() {
            if (currentQuestionIndex < questions.length) {
                const question = questions[currentQuestionIndex];
                const questionElement = document.createElement('p');
                questionElement.className = 'question';
                questionElement.innerText = question.question;
                questionContainer.appendChild(questionElement);

                // Tạo các lựa chọn cho câu hỏi
                question.options.forEach(option => {
                    const optionElement = document.createElement('div');
                    optionElement.className = 'answer';
                    optionElement.innerText = option;
                    optionElement.onclick = () => checkAnswer(option);
                    questionContainer.appendChild(optionElement);
                });
                questionContainer.style.display = 'block';
            }
        }

        // Hàm kiểm tra đáp án
        function checkAnswer(selectedOption) {
            const question = questions[currentQuestionIndex];
            const isCorrect = selectedOption === question.answer;
            const answerElement = document.createElement('div');
            answerElement.innerText = isCorrect ? 'Đúng rồi!' : 'Sai rồi!';
            answerElement.className = isCorrect ? 'correct' : 'incorrect';
            questionContainer.appendChild(answerElement);
            currentQuestionIndex++;

            // Hiển thị câu hỏi tiếp theo hoặc lời chúc cuối cùng
            setTimeout(() => {
                questionContainer.innerHTML = ''; // Xóa câu hỏi cũ
                if (currentQuestionIndex < questions.length) {
                    displayQuestion(); // Hiển thị câu hỏi tiếp theo
                } else {
                    displayFinalMessages(); // Hiển thị tất cả lời chúc cuối cùng
                }
            }, 1000);
        }

        // Hàm hiển thị tất cả lời chúc sau khi kết thúc các câu hỏi
        function displayFinalMessages() {
            questionContainer.style.display = 'none'; // Ẩn phần câu hỏi
            const finalMessages = messages[selectedEmoji];
            finalMessages.forEach(message => displayMessage(message)); // Hiển thị tất cả lời chúc
        }

        // Hàm chọn emoji
        function selectEmoji(emoji) {
            selectedEmoji = emoji; // Lưu emoji đã chọn
            messageContainer.innerHTML = ''; // Xóa lời chúc cũ
            questionContainer.innerHTML = ''; // Xóa câu hỏi cũ
            currentQuestionIndex = 0; // Đặt lại chỉ số câu hỏi
            displayQuestion(); // Hiển thị câu hỏi đầu tiên
        }

        // Hàm phát nhạc
        function playMusic() {
            backgroundMusic.play();
        }

        // Phát nhạc tự động khi trang được tải
        window.onload = () => {
            backgroundMusic.play();
        };