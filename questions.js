var NumberOfWords = 45

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "skulle köpa en drink till den som frågar frågan?"
words[2] = "sätter upp juldekorationen först?"
words[3] = "klagar mest?"
words[4] = "köper julklappar i sista minuten?"
words[5] = "uppskattar rave i skogen mest?"
words[6] = "skulle klara sig bäst under medeltiden?"
words[7] = "har köpt flest skor?"
words[8] = "skulle bete sig bäst på Nobelmiddagen?"
words[9] = "skulle bli nekad på Trappan?"
words[10] = "spendera mest pengar på ett impulsköp?"
words[11] = "är det störst chans att den blir rånad?"
words[12] = "tycker om vitt vin mest?"
words[13] = "är bäst på att flirta?"
words[14] = "spenderar mest pengar?"
words[15] = "kommer få barn först?"
words[16] = "kommer gifta sig först?"
words[17] = "har störst chans att bli arresterad?"
words[18] = "är sämst bilförare?"
words[19] = "har bäst lokalsinne?"
words[20] = "har bäst musiksmak?"
words[21] = "svär mest?"
words[22] = "är snålast när det kommer till alkohol?"
words[23] = "skulle kunna döda en björn snabbast?"
words[24] = "skulle överleva längst på en öde ö?"
words[25] = "skulle dött först i Hunger Games?"
words[26] = "tål mest alkohol?"
words[27] = "är roligast?"
words[28] = "kan gå det perfekta mordet?"
words[29] = "kommer hamna i fängelset inom 5 år?"
words[30] = "kommer låta någon som rymt från fängelset gömma sig hos den?"
words[31] = "skulle kuknnat vara med i PH?"
words[32] = "skulle kunna ta sms-lån?"
words[33] = "kommer spy ikväll?"
words[34] = "har sämst humor?"
words[35] = "kryddar mest?"
words[36] = "har mest åldersnojja?"
words[37] = "är mest romantisk?"
words[38] = "är en fjäskare?"
words[39] = "är bäst på beer pong?"
words[40] = "sveper långsamast?"
words[41] = "ALLA DRICKER"
words[42] = "ALLA DRICKER"
words[43] = "har blivit nekad inträde flest gånger?"
words[44] = "har blivit utslängd flest gånger?"
words[45] = "har får oftast minnesluckor?"



function BuildArray(size){
    this.length = size
    for (var i = 1; i <= size; i++){
        this[i] = null}
    return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
    var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
    frm.WordBox.value = words[rnd]
}