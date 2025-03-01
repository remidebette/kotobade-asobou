import { getStoredDisplayLanguage } from '../lib/localStorage'
import { PREFERRED_DISPLAY_LANGUAGE, MAX_WORD_LENGTH } from '../constants/settings'

export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const GAME_LINK = process.env.REACT_APP_GAME_LINK!

export const KOFI_LINK = 'https://ko-fi.com/taximanli'

interface TranslationType {
  [index: string]: string
}

export let en = {} as TranslationType

en['KOFI_LINK'] = KOFI_LINK
en['For keyboard input'] = 'Type かな here'

en['Settings'] = 'Settings'
en['Language'] = 'Language 言語'
en['Switch to language'] = '日本語'
en['Hint Mode'] = 'Hint Mode'
en['Hard Mode'] = 'Hard Mode'
en['Revealed hints'] = 'Revealed hints（$text1 and $text2）must be used in subsequent guesses.'
en['Dark Mode'] = 'Dark Mode'
en['High Contrast Mode'] = 'High Contrast Mode'
en['Feedback'] = 'Feedback'

en['This game is the'] = 'Kotobade Asobou is the'
en['Japanese version'] = 'Japanese version'
en['word guessing game'] = 'of the word guessing game we all know and love. This game was forked from this'
en['open source version'] = 'open source version'
en['massive development'] = 'and has undergone massive redevelopment with extra game mode and new elements added to accommodate the unique features of the Japanese language.'

en['If you enjoy'] = 'If you enjoy the game and would like to support my work, please consider'
en['buying me a coffee'] = 'buying me a coffee'
en['if you wish'] = '♥️'
en['Buy me a coffee?'] = 'Buy me a coffee? ♥️ ' + KOFI_LINK

en['SOLUTION_INDEX_TEXT'] = 'Game #$text1 on ' + (new Date()).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })

en['CORRECT_WORD_MESSAGE'] = 'The word for today was $text1.'
en['WRONG_SPOT_MESSAGE'] = 'Must use $text1 in position $text2.'
en['NOT_CONTAINED_MESSAGE'] = 'Guess must contain $text1.'

en['GAME_COPIED_MESSAGE'] = 'Copied results to clipboard'
en['NOT_ENOUGH_LETTERS_MESSAGE'] = '$text1 is not a ' + MAX_WORD_LENGTH + '-kana word'
en['WORD_NOT_FOUND_MESSAGE'] = 'Not in word list'
en['HINT_MODE_ALERT_MESSAGE'] = 'Hint Mode can only be turned off at the start'
en['HARD_MODE_ALERT_MESSAGE'] = 'Hard Mode can only be turned on at the start'
en['STATISTICS_TITLE'] = 'Statistics'
en['GUESS_DISTRIBUTION_TEXT'] = 'Guess Distribution'
en['NEW_WORD_TEXT'] = 'Next word in'
en['SHARE_TEXT'] = 'Share'
en['TWEET_TEXT'] = 'Tweet'
en['TOTAL_TRIES_TEXT'] = 'Games Played'
en['SUCCESS_RATE_TEXT'] = 'Success Rate'
en['CURRENT_STREAK_TEXT'] = 'Current Streak'
en['BEST_STREAK_TEXT'] = 'Best Streak'

export let ja = {} as TranslationType

ja['KOFI_LINK'] = KOFI_LINK
ja['For keyboard input'] = 'キーボード入力用'

ja['Settings'] = '設定'
ja['Language'] = 'Language 言語'
ja['Switch to language'] = 'English'
ja['Hint Mode'] = 'ヒントモード'
ja['Hard Mode'] = 'ハードモード'
ja['Revealed hints'] = '開示されたヒント（$text1 と $text2）を満たす単語だけが入力できます。'
ja['Dark Mode'] = 'ダークモード'
ja['High Contrast Mode'] = 'ハイコントラストモード'
ja['Feedback'] = 'フィードバック'

ja['This game is the'] = '「言葉で遊ぼう」は、有名で人気な単語パズルゲームの'
ja['Japanese version'] = '日本語版'
ja['word guessing game'] = 'です。このゲームは、この'
ja['open source version'] = 'オープンソース版'
ja['massive development'] = 'からフォークして大規模なソフトウェア再開発を経ています。また、日本語の特徴に合わせて、新しいモードと要素が追加されています。'

ja['If you enjoy'] = 'このゲームを楽しんで、私のアプリ開発をサポートしたい場合は、よろしければ'
ja['buying me a coffee'] = '私にコーヒーを一杯おごる'
ja['if you wish'] = '♥️ こともできます。'
ja['Buy me a coffee?'] = 'おごっていただけますか？♥️ ' + KOFI_LINK

ja['SOLUTION_INDEX_TEXT'] = (new Date()).toLocaleDateString("ja-JP", { year: 'numeric', month: 'short', day: 'numeric' }) + ' 第$text1回'

ja['CORRECT_WORD_MESSAGE'] = '今日の正解は「$text1」です。'
ja['WRONG_SPOT_MESSAGE'] = '$text2文字目は「$text1」でないといけません。'
ja['NOT_CONTAINED_MESSAGE'] = '「$text1」を答えに含める必要があります。'

ja['GAME_COPIED_MESSAGE'] = '成績をクリップボードにコピーしました'
ja['NOT_ENOUGH_LETTERS_MESSAGE'] = '「$text1」は ' + MAX_WORD_LENGTH + '文字の単語ではありません。' + MAX_WORD_LENGTH + '文字入力してください。'
ja['WORD_NOT_FOUND_MESSAGE'] = 'この答えは単語リストにありません'
ja['HINT_MODE_ALERT_MESSAGE'] = 'ヒントモードは、ゲーム開始時と終了時にのみオフにすることができます'
ja['HARD_MODE_ALERT_MESSAGE'] = 'ハードモードは、ゲーム開始時と終了時にのみオンにすることができます'
ja['STATISTICS_TITLE'] = '統計情報'
ja['GUESS_DISTRIBUTION_TEXT'] = '推測数の分布'
ja['NEW_WORD_TEXT'] = '次の単語まで'
ja['SHARE_TEXT'] = 'シェア'
ja['TWEET_TEXT'] = 'ツイート'
ja['TOTAL_TRIES_TEXT'] = 'プレイ回数'
ja['SUCCESS_RATE_TEXT'] = '勝率'
ja['CURRENT_STREAK_TEXT'] = '現在の連勝数'
ja['BEST_STREAK_TEXT'] = '最大連勝数'

export const t = (index: string, text1: string = '', text2: string = '') => {
  const displayLanguage = getStoredDisplayLanguage()
  let translationText = (displayLanguage === PREFERRED_DISPLAY_LANGUAGE ? ja[index] : en[index])
  if (text1 !== '') translationText = translationText.replace('$text1', text1)
  if (text2 !== '') translationText = translationText.replace('$text2', text2)
  return translationText
}

// export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!']
export const WIN_MESSAGES = {
  en: [
    'Genius!',
    'Genius!',
    'Magnificent!',
    'Magnificent!',
    'Impressive!',
    'Impressive!',
    'Splendid!',
    'Splendid!',
    'Great!',
    'Great!',
    'Phew!',
    'Phew!',
  ],
  ja: [
    '天才！',
    '天才！',
    '素晴らしい！',
    '素晴らしい！',
    '立派！',
    '立派！',
    '素敵！',
    '素敵！',
    'すごい！',
    'すごい！',
    'セーフ！',
    'セーフ！',
  ]
}

export const ENTER_TEXT = '⏎'
export const DELETE_TEXT = '⇦'

export const CLOSE_STATUS_KANA = [
  'あぁ',
  'いぃ',
  'うゔぅ',
  'えぇ',
  'おぉ',
  'やゃ',
  'ゆゅ',
  'よょ',
  'かが',
  'きぎ',
  'くぐ',
  'けげ',
  'こご',
  'さざ',
  'しじ',
  'すず',
  'せぜ',
  'そぞ',
  'ただ',
  'ちぢ',
  'つづっ',
  'てで',
  'とど',
  'はばぱ',
  'ひびぴ',
  'ふぶぷ',
  'へべぺ',
  'ほぼぽ',
]

export const CONSONANT_STATUS_KANA = [
  'あいうえおぁぃぅぇぉ',
  'かきくけこがぎぐげご',
  'さしすせそざじずぜぞ',
  'たちつてとだぢづでどっ',
  'なにぬねの',
  'はひふへほばびぶべぼぱぴぷぺぽ',
  'まみむめも',
  'やゆよゃゅょ',
  'らりるれろ',
  'わを',
]

export const VOWEL_STATUS_KANA = [
  'ぁあかさたなはまやらわがざだばぱゃ',
  'ぃいきしちにひみりぎじぢびぴ',
  'ぅうくすつぬふむゆるゔぐずづっぶぷゅ',
  'ぇえけせてねへめれげぜでべぺ',
  'ぉおこそとのほもよろをごぞどぼぽょ',  
]
