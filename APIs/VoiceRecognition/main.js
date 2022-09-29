const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const greedings = [
    'Jest dobrze, ale troche brzydko za oknem',
    'A, wie pan, moim zdaniem to nie ma tak, że dobrze, albo że niedobrze. Gdybym miał powiedzieć, co cenię w życiu najbardziej, powiedziałbym, że ludzi. Ludzi, którzy podali mi pomocną dłoń, kiedy sobie nie radziłem, kiedy byłem sam, i co ciekawe, to właśnie przypadkowe spotkania wpływają na nasze życie.',
    'A wiesz co Ty gnoju umył byś mnie czasem, jestem taki brudny, że święta ziema przy mnie to nic. I z czego się śmiejesz pajacu. Jak Ci się zawieszę to Cię żaden program nie pozna.'
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onstart = () => {
    console.log('voice is activated!')
}

recognition.onresult = event => {
    const current = event.resultIndex
    console.log(event)
    const transcript = event.results[current][0].transcript
    content.textContent = transcript

    if (transcript.match(/czujesz/)) {
        readOutLoud(greedings[Math.floor(Math.random() * greedings.length)])
    } else {
        readOutLoud(transcript)
    }
}

btn.addEventListener("click", () => {
    recognition.start()
})

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance()
    speech.volume = 1
    speech.rate = 1
    speech.lang = 'pl-PL'
    speech.text = message

    window.speechSynthesis.speak(speech)
}