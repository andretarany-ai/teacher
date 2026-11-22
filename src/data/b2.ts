import type { LessonSrc } from './types';

export const B2: LessonSrc[] = [
{
  id: 'b2-01', emoji: '🔬', title: 'Наука и технологии', de: 'Wissenschaft und Technik',
  goal: 'Описывать исследования и изобретения: пассив во всех временах, пассив состояния',
  grammar: {
    title: 'Пассив: Perfekt, с модальными, Zustandspassiv',
    points: [
      'Passiv Perfekt: **ist + Partizip II + worden** (не «geworden»!): Das Medikament **ist** 1928 **entdeckt worden**.',
      'С модальными в Präteritum: Die Daten **mussten** geprüft **werden**.',
      '**Zustandspassiv** (результат): **sein + Partizip II**: Die Tür **ist geöffnet**. (Дверь открыта.) Сравните: Die Tür **wird geöffnet** (её открывают — процесс).',
      'Альтернативы пассиву: **man** (Man nimmt an, dass…), **sich lassen** + Inf. (Das **lässt sich** leicht **erklären** = Это легко объяснить), **sein + zu + Inf.** (Das **ist** nicht **zu ändern** = Это нельзя изменить).',
    ],
    table: [
      ['Время', 'Пример'],
      ['Präsens', 'Die Studie wird veröffentlicht.'],
      ['Präteritum', 'Die Studie wurde veröffentlicht.'],
      ['Perfekt', 'Die Studie ist veröffentlicht worden.'],
      ['Modal', 'Die Studie muss veröffentlicht werden.'],
      ['Zustand', 'Die Studie ist veröffentlicht.'],
    ],
  },
  words: `
die Forschung, -en|исследование (сфера)
die Studie, -n|исследование (работа)
die Erfindung, -en|изобретение
entdecken|открывать (обнаруживать)
entwickeln|разрабатывать
veröffentlichen|публиковать
untersuchen|исследовать
das Ergebnis, -se|результат
der Fortschritt, -e|прогресс
die Wirkung, -en|действие, эффект
nachweisen|доказывать
der Versuch, -e|эксперимент; попытка
bahnbrechend|революционный, прорывной
die Nebenwirkung, -en|побочное действие
`,
  phrases: `
Das Penizillin ist 1928 von Alexander Fleming entdeckt worden.|Пенициллин был открыт в 1928 году Александром Флемингом.
Die Ergebnisse der Studie wurden letzte Woche veröffentlicht.|Результаты исследования опубликовали на прошлой неделе.
Der Impfstoff muss noch gründlich getestet werden.|Вакцину ещё нужно тщательно протестировать.
Das Problem lässt sich nicht so einfach lösen.|Эту проблему не так просто решить.
Die Wirkung ist wissenschaftlich nachgewiesen.|Эффект научно доказан.
Diese Frage ist kaum zu beantworten.|На этот вопрос едва ли можно ответить.
Man geht davon aus, dass die Technik bald billiger wird.|Предполагается, что технология скоро подешевеет.
Das war eine bahnbrechende Erfindung.|Это было прорывное изобретение.
`,
  gaps: `
Das Gebäude ist 1920 gebaut {worden}.|Здание было построено в 1920 году.|worden,geworden,werden
Das Fenster {ist} schon geöffnet.|Окно уже открыто.|ist,wird,wurde
Das lässt sich leicht {erklären}.|Это легко объяснить.|erklären,erklärt,zu erklären
Die Aufgabe ist bis Freitag zu {erledigen}.|Задачу нужно выполнить до пятницы.|erledigen,erledigt,erledigend
Die Daten mussten geprüft {werden}.|Данные нужно было проверить.|werden,worden,wurden
Die Studie {wurde} 2023 veröffentlicht.|Исследование опубликовано в 2023.|wurde,wird,würde
`,
  dialogTitle: 'Научная новость',
  dialog: `
A:Hast du gelesen? Ein neues Material ist entwickelt worden, das Plastik ersetzen kann.|Читал? Разработан новый материал, который может заменить пластик.
B:Ja! Es wird aus Algen hergestellt, oder?|Да! Его производят из водорослей, верно?
A:Genau. Allerdings muss es noch in der Praxis getestet werden.|Именно. Правда, его ещё нужно испытать на практике.
B:Ist schon bekannt, wann es auf den Markt kommt?|Уже известно, когда оно появится на рынке?
A:Das lässt sich noch nicht sagen. Die Produktion ist noch viel zu teuer.|Это пока нельзя сказать. Производство пока слишком дорогое.
B:Trotzdem: Das klingt nach einem echten Fortschritt.|И всё же это звучит как настоящий прогресс.
`,
  roleplay: { role: 'научный журналист, интервьюирующий вас как эксперта', situation: 'Интервью для научно-популярного журнала об изобретении, которое изменило мир (на ваш выбор).', goal: 'Рассказать об изобретении, используя Passiv Perfekt, sich lassen и sein + zu' },
},
{
  id: 'b2-02', emoji: '📰', title: 'Новости и СМИ', de: 'Nachrichten und Medien',
  goal: 'Передавать чужие слова: косвенная речь (Konjunktiv I)',
  grammar: {
    title: 'Konjunktiv I — косвенная речь',
    points: [
      'В новостях и официальных текстах чужие слова передают через **Konjunktiv I** — так журналист дистанцируется: Der Minister sagte, er **sei** zufrieden.',
      'Образование: основа инфинитива + окончания **-e, -est, -e**: er **habe**, er **komme**, er **könne**, er **werde**. Особый глагол **sein**: ich sei, du sei(e)st, er **sei**, wir seien, sie **seien**.',
      'Если форма Konjunktiv I совпадает с индикативом (чаще во мн. ч.: sie haben), используют **Konjunktiv II**: Sie sagten, sie **hätten** keine Zeit.',
      'Прошлое: **habe/sei + Partizip II**: Er sagte, er **habe** nichts **gewusst**. Вопросы: Sie fragte, **ob** er komme / **wann** er komme.',
    ],
    table: [
      ['', 'sein', 'haben', 'können', 'kommen'],
      ['ich', 'sei', '(hätte)', 'könne', '(käme)'],
      ['er/sie', 'sei', 'habe', 'könne', 'komme'],
      ['wir/sie', 'seien', '(hätten)', '(könnten)', '(kämen)'],
    ],
  },
  words: `
die Nachricht, -en|новость
die Zeitung, -en|газета
der Bericht, -e|сообщение, репортаж
berichten|сообщать
behaupten|утверждать
betonen|подчёркивать
die Quelle, -n|источник
laut|согласно (+ Dat./Gen.)
zufolge|согласно (стоит после слова)
die Pressekonferenz, -en|пресс-конференция
der Sprecher, -|представитель, спикер
die Regierung, -en|правительство
dementieren|опровергать
die Falschmeldung, -en|фейк, ложное сообщение
`,
  phrases: `
Der Sprecher sagte, die Lage sei unter Kontrolle.|Представитель сказал, что ситуация под контролем.
Die Ministerin betonte, man habe alles getan.|Министр подчеркнула, что сделано всё возможное.
Laut der Polizei gebe es keine Verletzten.|По данным полиции, пострадавших нет.
Er behauptete, er habe von nichts gewusst.|Он утверждал, что ничего не знал.
Die Firma teilte mit, sie werde 500 neue Stellen schaffen.|Фирма сообщила, что создаст 500 новых рабочих мест.
Die Journalistin fragte, ob die Steuern steigen würden.|Журналистка спросила, вырастут ли налоги.
Den Angaben zufolge seien die Preise um drei Prozent gestiegen.|Согласно данным, цены выросли на три процента.
Die Regierung dementierte den Bericht.|Правительство опровергло сообщение.
`,
  gaps: `
Er sagte, er {sei} krank.|Он сказал, что болен.|sei,ist,wäre
Sie erklärte, sie {habe} keine Zeit.|Она объяснила, что у неё нет времени.|habe,hat,hätte
Der Chef meinte, das Projekt {könne} warten.|Шеф считал, что проект может подождать.|könne,kann,konnte
Die Kinder sagten, sie {hätten} Hunger.|Дети сказали, что голодны.|hätten,haben,habe
Er behauptet, er {sei} gestern zu Hause gewesen.|Он утверждает, что вчера был дома.|sei,habe,wäre
Sie fragte, {ob} ich mitkomme.|Она спросила, пойду ли я с ними.|ob,dass,wenn
`,
  dialogTitle: 'Обсуждаем новости',
  dialog: `
A:Hast du die Nachrichten gehört? Der Bürgermeister sei zurückgetreten.|Слышал новости? Мэр якобы ушёл в отставку.
B:Wirklich? Aus welchem Grund?|Правда? По какой причине?
A:Laut der Zeitung habe er Geld aus der Stadtkasse benutzt.|По данным газеты, он использовал деньги из городской казны.
B:Ist das bestätigt oder nur ein Gerücht?|Это подтверждено или только слухи?
A:Sein Sprecher sagt, die Vorwürfe seien völlig falsch.|Его представитель говорит, что обвинения абсолютно ложны.
B:Dann warte ich lieber ab, bis es offizielle Informationen gibt.|Тогда я лучше подожду официальной информации.
`,
  roleplay: { role: 'главный редактор новостного сайта, проверяющий ваш материал', situation: 'Вы стажёр-журналист и пересказываете редактору интервью с политиком.', goal: 'Пересказать 4 высказывания в косвенной речи (Konjunktiv I) и ответить на уточнения' },
},
{
  id: 'b2-03', emoji: '📑', title: 'Деловой стиль', de: 'Die Arbeitswelt',
  goal: 'Понимать и использовать официально-деловой стиль: номинализация',
  grammar: {
    title: 'Nominalisierung — номинализация',
    points: [
      'В официальном немецком действия часто выражены **существительными**: «Wenn man den Vertrag unterschreibt» → **Bei der Unterzeichnung des Vertrags**.',
      'Как образовать: **инфинитив** → das (Lesen, Arbeiten); **-ung** → die (beantragen → die Beantragung, prüfen → die Prüfung); **корень** → der (beginnen → der Beginn, abschließen → der Abschluss).',
      'Союз → предлог: **wenn/als** → bei; **weil** → wegen; **obwohl** → trotz; **nachdem** → nach; **bevor** → vor; **während** → während; **damit/um…zu** → zur/zum.',
      'Weil die Kosten steigen → **Wegen der steigenden Kosten**. Um die Qualität zu verbessern → **Zur Verbesserung der Qualität**.',
    ],
    table: [
      ['Глагольный стиль', 'Номинальный стиль'],
      ['Nachdem er angekommen war, …', 'Nach seiner Ankunft …'],
      ['Weil es regnete, …', 'Wegen des Regens …'],
      ['Obwohl sie krank war, …', 'Trotz ihrer Krankheit …'],
      ['Um Kosten zu sparen, …', 'Zur Kostensenkung …'],
    ],
  },
  words: `
die Besprechung, -en|совещание
die Verhandlung, -en|переговоры
der Vertrag, -¨e|договор
die Vereinbarung, -en|соглашение
die Durchführung|проведение, реализация
die Umsetzung|воплощение, реализация
die Verbesserung, -en|улучшение
die Kündigung, -en|увольнение, расторжение
die Genehmigung, -en|разрешение
die Zuständigkeit, -en|компетенция, ответственность
zuständig|ответственный (за)
fristgerecht|в установленный срок
hinsichtlich|относительно (+ Gen.)
bezüglich|касательно (+ Gen.)
`,
  phrases: `
Bei Fragen stehe ich Ihnen gern zur Verfügung.|При возникновении вопросов я в Вашем распоряжении.
Nach Abschluss des Projekts erhalten Sie einen Bericht.|После завершения проекта Вы получите отчёт.
Wegen der hohen Nachfrage verlängern wir das Angebot.|Из-за высокого спроса мы продлеваем предложение.
Zur Verbesserung der Qualität führen wir neue Tests ein.|Для улучшения качества мы вводим новые тесты.
Bezüglich Ihrer Anfrage möchte ich Folgendes mitteilen.|Касательно Вашего запроса хотел бы сообщить следующее.
Für die Umsetzung ist Frau Lange zuständig.|За реализацию отвечает госпожа Ланге.
Die Kündigung muss fristgerecht eingereicht werden.|Заявление об увольнении нужно подать в срок.
Trotz intensiver Verhandlungen kam keine Einigung zustande.|Несмотря на интенсивные переговоры, соглашение не было достигнуто.
`,
  gaps: `
Nach {der} Besprechung gehen wir essen.|После совещания идём обедать.|der,dem,die
{Bei} Regen fällt das Fest aus.|В случае дождя праздник отменяется.|Bei,Mit,Von
Wegen der {Verspätung} des Zuges kam ich zu spät.|Из-за опоздания поезда я опоздал.|Verspätung,Verspäten,verspätet
Zur {Verbesserung} des Service bitten wir um Feedback.|Для улучшения сервиса просим отзыв.|Verbesserung,Verbessern,verbessern
Vor {Beginn} der Sitzung bitte die Handys ausschalten.|Перед началом заседания выключите телефоны.|Beginn,Beginnung,beginnen
Trotz {seiner} Erfahrung machte er einen Fehler.|Несмотря на опыт, он ошибся.|seiner,seinem,seine
`,
  dialogTitle: 'Деловой звонок',
  dialog: `
A:Firma Krause, Lange am Apparat. Was kann ich für Sie tun?|Фирма Краузе, у телефона Ланге. Чем могу помочь?
B:Guten Tag, hier spricht Petrova. Ich rufe bezüglich unserer Vereinbarung vom Montag an.|Добрый день, это Петрова. Звоню по поводу нашей договорённости в понедельник.
A:Ach ja, Frau Petrova. Gibt es Probleme bei der Umsetzung?|Ах да, госпожа Петрова. Есть проблемы с реализацией?
B:Wegen eines Lieferengpasses verzögert sich der Projektstart um eine Woche.|Из-за перебоев с поставками старт проекта переносится на неделю.
A:Verstehe. Ist die Durchführung bis Ende des Monats trotzdem möglich?|Понимаю. Тем не менее проведение до конца месяца возможно?
B:Davon gehen wir aus. Ich schicke Ihnen nach Klärung aller Details eine Bestätigung.|Мы на это рассчитываем. После уточнения деталей пришлю Вам подтверждение.
`,
  roleplay: { role: 'деловой партнёр из немецкой компании-поставщика, Herr Krause', situation: 'Деловые переговоры: поставка задерживается, нужно договориться о новых условиях.', goal: 'Вести разговор в деловом стиле, использовать номинальные конструкции (wegen, bei, nach, zur)' },
},
{
  id: 'b2-04', emoji: '📚', title: 'Литература и искусство', de: 'Literatur und Kunst',
  goal: 'Понимать сложные описания: причастные определения',
  grammar: {
    title: 'Partizipialattribute — причастия перед существительным',
    points: [
      'Причастие I (**-end**) = «-ющий/-щий» (одновременность, актив): das **lachende** Kind (смеющийся ребёнок), die **steigenden** Preise.',
      'Причастие II = «-нный/-тый» (завершённость, пассив): das **gelesene** Buch (прочитанная книга), die **geschlossene** Tür.',
      'Причастие склоняется как прилагательное и может иметь расширения перед собой: die **gestern in Berlin eröffnete** Ausstellung = die Ausstellung, **die gestern in Berlin eröffnet wurde**.',
      'Ключ к пониманию: найдите артикль → прыгните к существительному → потом читайте середину.',
      '**zu + Partizip I** = «который нужно…»: die **zu lösende** Aufgabe (задача, которую нужно решить).',
    ],
  },
  words: `
das Werk, -e|произведение
der Roman, -e|роман
die Erzählung, -en|рассказ, повесть
das Gedicht, -e|стихотворение
die Ausstellung, -en|выставка
das Gemälde, -|картина (живопись)
der Künstler, -|художник, деятель искусства
die Handlung, -en|сюжет
die Figur, -en|персонаж
darstellen|изображать
spannend|захватывающий
beeindruckend|впечатляющий
anspruchsvoll|сложный, требовательный
die Rezension, -en|рецензия
`,
  phrases: `
Der 1924 erschienene Roman gilt als Meisterwerk.|Вышедший в 1924 году роман считается шедевром.
Die gestern eröffnete Ausstellung zeigt Werke von Paul Klee.|Открывшаяся вчера выставка показывает работы Пауля Клее.
Die Hauptfigur ist ein ständig zweifelnder junger Mann.|Главный герой — постоянно сомневающийся молодой человек.
Das Gemälde stellt eine schlafende Frau dar.|Картина изображает спящую женщину.
Die Handlung ist spannend, aber die Sprache ist anspruchsvoll.|Сюжет захватывающий, но язык сложный.
Das ist ein von vielen Kritikern gelobtes Buch.|Это книга, которую хвалят многие критики.
Die noch zu klärenden Fragen besprechen wir morgen.|Вопросы, которые ещё нужно прояснить, обсудим завтра.
Das Gedicht hat mich tief beeindruckt.|Стихотворение произвело на меня глубокое впечатление.
`,
  gaps: `
Das {lachende} Kind spielt im Garten.|Смеющийся ребёнок играет в саду.|lachende,gelachte,lachen
Die {geschlossene} Tür ließ sich nicht öffnen.|Закрытая дверь не открывалась.|geschlossene,schließende,geschlossen
Wegen der {steigenden} Preise kaufen wir weniger.|Из-за растущих цен мы покупаем меньше.|steigenden,gestiegen,steigende
Das {gestohlene} Bild wurde gefunden.|Украденную картину нашли.|gestohlene,stehlende,gestohlen
Die zu {lösende} Aufgabe ist schwer.|Задача, которую нужно решить, трудная.|lösende,gelöste,lösen
Ich lese ein von Kafka {geschriebenes} Buch.|Я читаю книгу, написанную Кафкой.|geschriebenes,schreibendes,geschrieben
`,
  dialogTitle: 'После выставки',
  dialog: `
A:Wie hat dir die Ausstellung gefallen?|Как тебе выставка?
B:Sehr gut! Besonders das im Eingang hängende Gemälde hat mich beeindruckt.|Очень! Особенно впечатлила картина, висящая у входа.
A:Das mit der tanzenden Frau? Ja, die Farben sind unglaublich.|Та, с танцующей женщиной? Да, цвета невероятные.
B:Wusstest du, dass das Bild erst nach dem Tod des Künstlers bekannt wurde?|Ты знал, что картина стала известна только после смерти художника?
A:Nein! Die bis heute ungeklärte Geschichte des Bildes ist faszinierend.|Нет! До сих пор не разгаданная история картины завораживает.
B:Genau. Darüber möchte ich unbedingt mehr lesen.|Точно. Я обязательно хочу почитать об этом больше.
`,
  roleplay: { role: 'ведущий книжного клуба, обсуждающий прочитанную книгу или фильм', situation: 'Встреча книжного клуба: каждый рассказывает о любимом произведении.', goal: 'Описать сюжет и персонажей, используя минимум 2 причастных определения, и дать оценку' },
},
{
  id: 'b2-05', emoji: '🌍', title: 'Общество и окружающий мир', de: 'Gesellschaft und Umwelt',
  goal: 'Строить сложные связные высказывания: двойные союзы',
  grammar: {
    title: 'Zweiteilige Konnektoren — двойные союзы',
    points: [
      '**sowohl … als auch** — как …, так и: **Sowohl** Kinder **als auch** Erwachsene nutzen soziale Medien.',
      '**weder … noch** — ни … ни: Er hat **weder** Zeit **noch** Geld.',
      '**entweder … oder** — либо … либо: **Entweder** wir handeln jetzt, **oder** es ist zu spät.',
      '**nicht nur … sondern auch** — не только … но и.',
      '**zwar … aber** — хотя … но: Das Auto ist **zwar** teuer, **aber** umweltfreundlich.',
      '**je … desto/umso** — чем … тем: **Je** mehr man liest, **desto** besser **schreibt** man. (после je — глагол в конце, после desto + сравнительная степень — сразу глагол!)',
    ],
  },
  words: `
die Gesellschaft, -en|общество
die Gerechtigkeit|справедливость
die Armut|бедность
der Wohlstand|благосостояние
die Ungleichheit, -en|неравенство
die Integration|интеграция
die Verantwortung|ответственность
der Verbrauch|потребление
die Maßnahme, -n|мера
die Ressource, -n|ресурс
sowohl … als auch|как … так и
weder … noch|ни … ни
je … desto|чем … тем
zwar … aber|хотя … но
`,
  phrases: `
Sowohl die Politik als auch jeder Einzelne trägt Verantwortung.|Ответственность несёт как политика, так и каждый человек.
Er raucht weder noch trinkt er Alkohol.|Он не курит и не пьёт алкоголь.
Entweder wir reduzieren den Verbrauch, oder die Ressourcen gehen aus.|Либо мы сократим потребление, либо ресурсы закончатся.
Das Problem betrifft nicht nur arme, sondern auch reiche Länder.|Проблема касается не только бедных, но и богатых стран.
Die Maßnahme ist zwar teuer, aber langfristig sinnvoll.|Мера хотя и дорогая, но в долгосрочной перспективе разумная.
Je früher wir handeln, desto geringer sind die Kosten.|Чем раньше мы будем действовать, тем ниже будут издержки.
Je mehr ich darüber lese, umso komplizierter finde ich das Thema.|Чем больше я об этом читаю, тем сложнее мне кажется тема.
Die soziale Ungleichheit wächst weltweit.|Социальное неравенство растёт во всём мире.
`,
  gaps: `
Ich spreche sowohl Englisch {als auch} Deutsch.|Я говорю как по-английски, так и по-немецки.|als auch,noch,oder
Er hat weder Hunger {noch} Durst.|Он не голоден и не хочет пить.|noch,oder,als auch
Entweder du kommst mit, {oder} du bleibst hier.|Либо ты идёшь с нами, либо остаёшься здесь.|oder,noch,aber
Je länger ich warte, {desto} nervöser werde ich.|Чем дольше я жду, тем больше нервничаю.|desto,als,so
Die Wohnung ist zwar klein, {aber} gemütlich.|Квартира хоть и маленькая, но уютная.|aber,sondern,doch
Das ist nicht nur teuer, {sondern} auch schlecht.|Это не только дорого, но и плохо.|sondern,aber,oder
`,
  dialogTitle: 'Дискуссия о городе',
  dialog: `
A:Die Stadt will das Zentrum autofrei machen. Was hältst du davon?|Город хочет сделать центр без машин. Что ты об этом думаешь?
B:Ich finde die Idee zwar gut, aber die Umsetzung wird schwierig.|Идея, конечно, хорошая, но реализовать её будет сложно.
A:Warum? Sowohl die Luft als auch die Lebensqualität würden besser.|Почему? Улучшились бы как воздух, так и качество жизни.
B:Schon, aber viele Leute haben weder ein Fahrrad noch eine gute Busverbindung.|Да, но у многих нет ни велосипеда, ни хорошего автобусного сообщения.
A:Dann muss die Stadt eben in den Nahverkehr investieren.|Значит, город должен инвестировать в общественный транспорт.
B:Stimmt. Je besser der Nahverkehr, desto weniger Autos braucht man.|Верно. Чем лучше общественный транспорт, тем меньше нужны машины.
`,
  roleplay: { role: 'модератор городского форума', situation: 'Публичная дискуссия о социальной проблеме вашего города (на выбор).', goal: 'Выразить сложную позицию, используя минимум 3 разных двойных союза' },
},
{
  id: 'b2-06', emoji: '🕵️', title: 'Детектив: версии', de: 'Ein Krimi: Vermutungen',
  goal: 'Выражать предположения и степень уверенности: субъективные модальные глаголы',
  grammar: {
    title: 'Субъективное значение модальных глаголов',
    points: [
      'Модальные глаголы могут выражать **степень уверенности** говорящего:',
      '**muss** — почти уверен (≈ 90%): Er **muss** zu Hause sein, das Licht brennt.',
      '**dürfte** — вероятно (≈ 75%): Das **dürfte** der Täter sein.',
      '**kann/könnte** — возможно (≈ 50%): Es **könnte** ein Unfall gewesen sein.',
      '**kann nicht** — исключено: Er **kann** nicht der Täter **sein**.',
      '**soll** — говорят, что (чужая информация): Er **soll** sehr reich sein. **will** — утверждает о себе: Er **will** nichts gesehen haben.',
      'О прошлом: модальный + **Partizip II + haben/sein**: Er **muss** den Schlüssel **verloren haben**. Sie **könnte** schon **weggefahren sein**.',
    ],
  },
  words: `
der Krimi, -s|детектив
der Täter, -|преступник
das Opfer, -|жертва
der Zeuge, -n|свидетель
das Alibi, -s|алиби
die Spur, -en|след
der Verdacht|подозрение
verdächtig|подозрительный
der Kommissar, -e|комиссар
ermitteln|расследовать
stehlen|красть
der Einbruch, -¨e|кража со взломом
vermuten|предполагать
die Beweise|доказательства
`,
  phrases: `
Der Täter muss einen Schlüssel gehabt haben.|У преступника, должно быть, был ключ.
Das dürfte der Gärtner gewesen sein.|Вероятно, это был садовник.
Es könnte auch ein Unfall gewesen sein.|Это мог быть и несчастный случай.
Sie kann es nicht gewesen sein – sie hat ein Alibi.|Это не могла быть она — у неё алиби.
Der Nachbar will nichts gehört haben.|Сосед утверждает, что ничего не слышал.
Der Verdächtige soll ins Ausland geflohen sein.|Подозреваемый, говорят, сбежал за границу.
Die Spuren deuten auf einen Einbruch hin.|Следы указывают на кражу со взломом.
Ohne Beweise können wir niemanden verhaften.|Без доказательств мы никого не можем арестовать.
`,
  gaps: `
Das Licht brennt. Er {muss} zu Hause sein.|Свет горит. Он должен быть дома.|muss,soll,will
Der Zeuge {will} nichts gesehen haben.|Свидетель утверждает, что ничего не видел.|will,soll,muss
Sie {soll} sehr reich sein, sagt man.|Говорят, она очень богата.|soll,will,darf
Er kann es nicht gewesen {sein}.|Это не мог быть он.|sein,haben,werden
Der Dieb muss durch das Fenster {gekommen} sein.|Вор, должно быть, проник через окно.|gekommen,kommen,gekommt
Das {dürfte} schwierig werden.|Это, вероятно, будет сложно.|dürfte,darf,durfte
`,
  dialogTitle: 'Кто украл картину?',
  dialog: `
A:Das Gemälde ist weg, aber die Tür war abgeschlossen.|Картина пропала, но дверь была заперта.
B:Dann muss der Täter einen Schlüssel gehabt haben.|Значит, у преступника должен был быть ключ.
A:Nur der Hausmeister und die Direktorin haben einen Schlüssel.|Ключ есть только у завхоза и директора.
B:Die Direktorin kann es nicht gewesen sein. Sie war zu der Zeit in Paris.|Директор не могла этого сделать. Она была тогда в Париже.
A:Und der Hausmeister will die ganze Nacht geschlafen haben.|А завхоз утверждает, что всю ночь спал.
B:Hm. Er soll Spielschulden haben, sagen die Kollegen.|Хм. Говорят, у него карточные долги — так коллеги говорят.
A:Das dürfte unser Motiv sein!|Это, вероятно, наш мотив!
`,
  roleplay: { role: 'комиссар Kommissarin Brandt, расследующая загадочное исчезновение в отеле', situation: 'Вы детектив-напарник. Комиссар делится уликами и спрашивает ваши версии.', goal: 'Выдвинуть 3 версии с разной степенью уверенности (muss, dürfte, könnte, kann nicht, soll, will)' },
},
{
  id: 'b2-07', emoji: '❤️', title: 'Чувства и отношения', de: 'Gefühle und Beziehungen',
  goal: 'Говорить о чувствах: глаголы с предлогами, da- и wo-слова',
  grammar: {
    title: 'Глаголы с предлогами, darauf / worauf',
    points: [
      'Многие глаголы требуют конкретного предлога — учите их вместе: **sich freuen auf** + Akk. (ждать), **sich freuen über** + Akk. (радоваться), **Angst haben vor** + Dat., **sich verlieben in** + Akk., **denken an** + Akk., **sich kümmern um**, **träumen von**, **sich ärgern über**, **sich verlassen auf**.',
      'Если речь о **вещи** — местоимённое наречие **da(r) + предлог**: Ich freue mich **darauf**. Ich denke oft **daran**.',
      'Вопрос о вещи: **wo(r) + предлог**: **Worauf** freust du dich? **Wovon** träumst du?',
      'О **людях** — предлог + местоимение: Ich denke **an dich**. **An wen** denkst du?',
      'da-слово может «анонсировать» придаточное: Ich freue mich **darauf**, **dass** du kommst.',
    ],
  },
  words: `
das Gefühl, -e|чувство
die Liebe|любовь
die Eifersucht|ревность
die Sehnsucht|тоска (по чему-то)
sich verlieben in|влюбиться в
sich trennen von|расстаться с
sich kümmern um|заботиться о
sich sehnen nach|тосковать по
Angst haben vor|бояться
sich verlassen auf|полагаться на
enttäuscht|разочарованный
erleichtert|испытывающий облегчение
eifersüchtig|ревнивый
darauf|на это / этого (da + auf)
worüber|о чём, чему (wo + über)
`,
  phrases: `
Ich habe mich auf den ersten Blick in ihn verliebt.|Я влюбилась в него с первого взгляда.
Worüber ärgerst du dich so?|Что тебя так злит?
Ich freue mich schon darauf, dich wiederzusehen.|Я уже жду, когда снова тебя увижу.
Sie hat Angst davor, allein zu sein.|Она боится остаться одна.
Er kümmert sich liebevoll um seine kranke Mutter.|Он с любовью заботится о больной матери.
Ich sehne mich nach meiner Heimat.|Я тоскую по родине.
Auf ihn kann ich mich immer verlassen.|На него я всегда могу положиться.
Nach dem Gespräch war ich sehr erleichtert.|После разговора мне стало намного легче.
`,
  gaps: `
Ich freue mich {auf} den Urlaub.|Я жду отпуска.|auf,über,für
Sie hat Angst {vor} Spinnen.|Она боится пауков.|vor,von,für
{Worauf} wartest du?|Чего ты ждёшь?|Worauf,Wofür,Auf was
Ich denke oft {daran}.|Я часто об этом думаю.|daran,dafür,an es
Er hat sich {in} seine Kollegin verliebt.|Он влюбился в коллегу.|in,an,mit
An {wen} denkst du gerade?|О ком ты сейчас думаешь?|wen,was,woran
`,
  dialogTitle: 'Откровенный разговор',
  dialog: `
A:Du wirkst so nachdenklich. Woran denkst du?|Ты такой задумчивый. О чём думаешь?
B:An Lena. Ich glaube, ich habe mich in sie verliebt.|О Лене. Кажется, я в неё влюбился.
A:Wie schön! Weiß sie davon?|Как здорово! Она об этом знает?
B:Nein. Ich habe Angst davor, unsere Freundschaft kaputt zu machen.|Нет. Я боюсь разрушить нашу дружбу.
A:Das verstehe ich. Aber worauf wartest du? Rede mit ihr!|Понимаю. Но чего ты ждёшь? Поговори с ней!
B:Du hast recht. Ich kümmere mich morgen darum – versprochen.|Ты прав. Займусь этим завтра — обещаю.
`,
  roleplay: { role: 'близкий друг, которому вы рассказываете о сложной ситуации в отношениях', situation: 'Вечерний разговор по душам: у вас дилемма (выдуманная) в отношениях или дружбе.', goal: 'Описать чувства, используя 4+ глагола с предлогами и da-/wo-слова' },
},
{
  id: 'b2-08', emoji: '⚖️', title: 'Дебаты: цифровой мир', de: 'Debatte: Digitalisierung',
  goal: 'Аргументировать как на экзамене B2: структура, Konjunktiv II прошедшего, сожаления',
  grammar: {
    title: 'Konjunktiv II Vergangenheit и аргументация',
    points: [
      'Нереальное в прошлом: **hätte/wäre + Partizip II**: Wenn ich das **gewusst hätte**, **wäre** ich nicht **gekommen**.',
      'С модальными — двойной инфинитив: Wir **hätten** früher **handeln sollen**. (Нам следовало бы действовать раньше.) Du **hättest** mich **anrufen können**.',
      'Структура аргумента: **These** (Ich vertrete die Ansicht, dass…) → **Begründung** (Das liegt daran, dass… / Ein wichtiges Argument ist…) → **Beispiel** (Das zeigt sich zum Beispiel an…) → **Fazit** (Zusammenfassend lässt sich sagen…).',
      'Уступка и контраргумент: **Es mag sein, dass … , dennoch …** / **Man darf nicht vergessen, dass …** / **Dem kann ich nur bedingt zustimmen.**',
    ],
  },
  words: `
die Digitalisierung|цифровизация
der Datenschutz|защита данных
die Privatsphäre|частная жизнь
die Überwachung|слежка, контроль
der Algorithmus, Algorithmen|алгоритм
abhängig sein von|зависеть от
die These, -n|тезис
die Begründung, -en|обоснование
das Fazit, -s|вывод
einwenden|возражать
vertreten|отстаивать (мнение)
bedingt|отчасти, условно
zusammenfassend|подводя итог
dennoch|тем не менее
`,
  phrases: `
Ich vertrete die Ansicht, dass Datenschutz wichtiger ist als Bequemlichkeit.|Я придерживаюсь мнения, что защита данных важнее удобства.
Das liegt vor allem daran, dass wir zu viel online preisgeben.|Это связано прежде всего с тем, что мы слишком много раскрываем в сети.
Es mag sein, dass Apps praktisch sind, dennoch sammeln sie unsere Daten.|Возможно, приложения удобны, тем не менее они собирают наши данные.
Dem kann ich nur bedingt zustimmen.|С этим я могу согласиться лишь отчасти.
Man darf nicht vergessen, dass Algorithmen nicht neutral sind.|Нельзя забывать, что алгоритмы не нейтральны.
Wir hätten früher klare Regeln schaffen sollen.|Нам следовало раньше создать чёткие правила.
Wenn ich das gewusst hätte, hätte ich die App nie installiert.|Если бы я это знал, я бы никогда не установил это приложение.
Zusammenfassend lässt sich sagen, dass die Digitalisierung Chancen und Risiken birgt.|Подводя итог, можно сказать, что цифровизация несёт и шансы, и риски.
`,
  gaps: `
Wenn ich Zeit gehabt {hätte}, wäre ich gekommen.|Если бы у меня было время, я бы пришёл.|hätte,wäre,habe
Wenn du früher aufgestanden {wärst}, hättest du den Bus erreicht.|Если бы ты встал раньше, ты бы успел на автобус.|wärst,hättest,bist
Wir hätten früher handeln {sollen}.|Нам следовало действовать раньше.|sollen,gesollt,sollten
Du hättest mich anrufen {können}!|Ты мог бы мне позвонить!|können,gekonnt,konntest
Es mag sein, dass das stimmt, {dennoch} bin ich skeptisch.|Возможно, это так, тем не менее я настроен скептически.|dennoch,deshalb,obwohl
Das liegt {daran}, dass viele keine Wahl haben.|Это связано с тем, что у многих нет выбора.|daran,davon,dafür
`,
  dialogTitle: 'Дебаты на экзамене',
  dialog: `
A:Sollten soziale Netzwerke erst ab 16 Jahren erlaubt sein? Wie sehen Sie das?|Следует ли разрешать соцсети только с 16 лет? Каково Ваше мнение?
B:Ich vertrete die Ansicht, dass eine Altersgrenze sinnvoll wäre.|Я придерживаюсь мнения, что возрастное ограничение было бы разумным.
A:Können Sie das begründen?|Можете это обосновать?
B:Das liegt vor allem daran, dass Jugendliche besonders leicht abhängig werden.|Это связано прежде всего с тем, что подростки особенно легко становятся зависимыми.
A:Es mag sein, aber ein Verbot lässt sich kaum kontrollieren.|Возможно, но запрет вряд ли можно проконтролировать.
B:Dem kann ich nur bedingt zustimmen. Man hätte schon längst eine sichere Altersprüfung einführen können.|С этим я соглашусь лишь отчасти. Давно можно было бы ввести надёжную проверку возраста.
A:Und Ihr Fazit?|И Ваш вывод?
B:Zusammenfassend lässt sich sagen: Schutz ist wichtiger als totale Freiheit.|Подводя итог: защита важнее полной свободы.
`,
  roleplay: { role: 'экзаменатор Goethe-Zertifikat B2 в устной части (Diskussion)', situation: 'Устная часть экзамена B2: дискуссия на тему «Homeoffice für alle?»', goal: 'Построить аргументацию: тезис → обоснование → пример → вывод, отреагировать на контраргумент' },
},
];
