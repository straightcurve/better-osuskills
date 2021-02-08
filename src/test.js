module.exports = withMods();

function withMods() {
    return `
<html><head>		
	<title>Training | osu!Skills</title>
	<!-- favicon section -->
	<link rel="apple-touch-icon" sizes="57x57" href="/template/images/favicons/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/template/images/favicons/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/template/images/favicons/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/template/images/favicons/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/template/images/favicons/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/template/images/favicons/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/template/images/favicons/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/template/images/favicons/apple-touch-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/template/images/favicons/apple-touch-icon-180x180.png">
	<link rel="icon" type="image/png" href="/template/images/favicons/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="/template/images/favicons/android-chrome-192x192.png" sizes="192x192">
	<link rel="icon" type="image/png" href="/template/images/favicons/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="/template/images/favicons/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="./template/images/favicons/manifest.json">
	<link rel="shortcut icon" href="/template/images/favicons/favicon.ico">
	<meta name="msapplication-TileColor" content="#44aadd">
	<meta name="msapplication-TileImage" content="/template/images/favicons/mstile-144x144.png">
	<meta name="msapplication-config" content="/template/images/favicons/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- /favicon section -->	
	<link href="https://fonts.googleapis.com/css?family=Exo+2:400,600,600italic,800italic&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css">
	<link href="/template/css/font-awesome.css" rel="stylesheet" type="text/css">
	<link href="/template/css/flag-icon.css" rel="stylesheet" type="text/css">
	<link href="/template/css/jquery-ui.css" rel="stylesheet" type="text/css">
	<link href="/template/css/styleDark.css" id="theme_css" rel="stylesheet" type="text/css">
	<script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/2Mfykwl2mlvyQZQ3PEgoH710/recaptcha__en.js" crossorigin="anonymous" integrity="sha384-Cx10SI4nRyIf/4CfTL8bj2s8I5ccz18HDscUBxSzsbe1SPnhchceoHtCw2m0nc/h"></script><script async="" src="//www.google-analytics.com/analytics.js"></script><script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	<!-- <script src="/template/js/jquery-ui.min.js"></script> -->
	<script src="/template/js/jquery.redirect.js"></script>
	<script src="/template/js/jquery.timeago.js"></script>
	<script src="/template/js/jquery.spoiler.min.js"></script>
	<script src="/template/js/ga.js?1612721590"></script>
	<script src="/template/js/themeChanger.js"></script>
	<script src="/pages/training/script.js"></script>
	<script src="https://www.google.com/recaptcha/api.js"></script>
	<script src="/template/js/jquery-ui.min.js"></script>
	<script src="/template/js/jquery.ui.touch-punch.min.js"></script>
	<script src="/template/js/jquery.tablesorter.min.js"></script>	
</head>
<body>
	<div id="pageHeader">
		<div class="headerContent">
			<h1>
				<a href="/">
					osu!Skills<span class="small"> Beta</span>
				</a>
			</h1>
			<a class="logo" id="headerLogo" href="/" style="background-image: url(&quot;/template/images/logo_120_dark.png&quot;);"></a>
			<nav>
				<ul><li class="dropdown"><span>Rankings&nbsp;<i class="fa fa-angle-down"></i></span><ul><li><a href="/top/stamina">Stamina</a></li><li><a href="/top/tenacity">Tenacity</a></li><li><a href="/top/agility">Agility</a></li><li><a href="/top/accuracy">Accuracy</a></li><li><a href="/top/precision">Precision</a></li><li><a href="/top/reaction">Reaction</a></li><li><a href="/top/memory">Memory</a></li></ul></li><li class="dropdown"><span>Tools&nbsp;<i class="fa fa-angle-down"></i></span><ul><li><a href="/versus">Versus</a></li><li><a href="/training">Training</a></li></ul></li><li><a href="/faq">FAQ</a></li><li><a href="/donate">Donate</a></li></ul>			</nav>
		</div>
	</div>
	<div class="subHeader">
	</div>
	<div class="wrap">
		<div class="content">
		<div class="columnTitle">
				<h5>Training</h5>
			</div>
			<div id="trainingWrap">
				<p>Are you looking for personalized recommendations? (optional) </p>
				<input class="versusInput" id="username" type="text" name="username" placeholder="Enter playername">
				<div class="g-recaptcha" id="captchaUsername" data-callback="captchaUsernameFunc" data-sitekey="6Leh0yATAAAAAFngkAixeAYRXbXghq7ctoIH7C32" style="display: block;"><div style="width: 304px; height: 78px;"><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Leh0yATAAAAAFngkAixeAYRXbXghq7ctoIH7C32&amp;co=aHR0cDovL3d3dy5vc3Vza2lsbHMuY29tOjgw&amp;hl=en&amp;v=2Mfykwl2mlvyQZQ3PEgoH710&amp;size=normal&amp;cb=81jfnts5hvi" width="304" height="78" role="presentation" name="a-6t5eijej3vg6" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div></div>
				<button id="loadPlayer" class="mainBtn hvr-bounce-to-right" type="submit" value="Load skills" style="display: none;">Load skills</button>
				<div id="trainingColumnsWrap">
				
					<div id="recWrap">
					<div class="columnTitle">
						<h5>Skill selection</h5>
					</div>
						<button id="btn-reset" class="presetResetBtn">Reset</button>
						<div class="rec">
							<label for="staminaCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">Stamina</label>
							<input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="staminaIgnored" id="staminaCheckbox">
							<div id="staminaSlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content ui-slider-disabled ui-state-disabled"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 5%; width: 45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 5%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 50%;"></span></div>
							<input type="text" name="staminaMin" class="trainingIntervalInput min" value="100" disabled="">
							<input type="text" name="staminaMax" class="trainingIntervalInput max" value="1000" disabled="">
						</div>		
						<div class="rec">
							<label for="tenacityCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">Tenacity</label>
							<input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="tenacityIgnored" id="tenacityCheckbox">
							<div id="tenacitySlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content ui-slider-disabled ui-state-disabled"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 5%; width: 45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 5%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 50%;"></span></div>
							<input type="text" name="tenacityMin" class="trainingIntervalInput min" value="100" disabled="">
							<input type="text" name="tenacityMax" class="trainingIntervalInput max" value="1000" disabled="">
						</div>		
						<div class="rec">
							<label for="agilityCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget">Agility</label>
							<input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="agilityIgnored" id="agilityCheckbox">
							<div id="agilitySlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 13.5%; width: 2.25%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 13.5%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 15.75%;"></span></div>
							<input type="text" name="agilityMin" class="trainingIntervalInput min" value="100">
							<input type="text" name="agilityMax" class="trainingIntervalInput max" value="1000">
						</div>
						<div class="rec">
							<label for="accuracyCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">Accuracy</label>
							<input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="accuracyIgnored" id="accuracyCheckbox">
							<div id="accuracySlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content ui-slider-disabled ui-state-disabled"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 5%; width: 45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 5%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 50%;"></span></div>
							<input type="text" name="accuracyMin" class="trainingIntervalInput min" value="100" disabled="">
							<input type="text" name="accuracyMax" class="trainingIntervalInput max" value="1000" disabled="">
						</div>
						<div class="rec">
							<label for="precisionCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">Precision</label>
							<input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="precisionIgnored" id="precisionCheckbox">
							<div id="precisionSlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content ui-slider-disabled ui-state-disabled"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 5%; width: 45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 5%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 50%;"></span></div>
							<input type="text" name="precisionMin" class="trainingIntervalInput min" value="100" disabled="">
							<input type="text" name="precisionMax" class="trainingIntervalInput max" value="1000" disabled="">
						</div>
						<div class="rec">
							<label for="reactionCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">Reaction</label>
							<input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="reactionIgnored" id="reactionCheckbox">
							<div id="reactionSlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content ui-slider-disabled ui-state-disabled"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 5%; width: 45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 5%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 50%;"></span></div>
							<input type="text" name="reactionMin" class="trainingIntervalInput min" value="100" disabled="">
							<input type="text" name="reactionMax" class="trainingIntervalInput max" value="1000" disabled="">
						</div>
						<div class="rec">
							<label for="memoryCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">Memory</label>
							<input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="memoryIgnored" id="memoryCheckbox" checked="">
							<div id="memorySlider" class="slider-range ui-slider-disabled ui-state-disabled ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 5%; width: 45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 5%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 50%;"></span></div>
							<input type="text" name="memoryMin" class="trainingIntervalInput min" value="100" disabled="">
							<input type="text" name="memoryMax" class="trainingIntervalInput max" value="1000" disabled="">
						</div>
					</div>
					
					<div id="presetsWrap">
						<div class="columnTitle">
							<h5>Presets</h5>
						</div>
						<button id="btn-streamy" class="presetBtn">Streamy</button>
						<button id="btn-tinycircles" class="presetBtn">Tiny Circles</button>
						<button id="btn-rhythm" class="presetBtn">Rhythm</button>
						<button id="btn-fastaim" class="presetBtn">Fast aim</button>
						<button id="btn-sightreading" class="presetBtn">Sight-reading</button>
						<button id="btn-memory" class="presetBtn">Memory</button>
						<button id="btn-inthezone" class="presetBtn">In the zone (+4%)</button>
						<button id="btn-nevergiveup" class="presetBtn">Never give up (+15%)</button>
						<button id="btn-bringiton" class="presetBtn">Bring it on! (+25%)</button>
						<button id="btn-relaxed" class="presetBtn">Relaxed (-10%)</button>
					</div>
				</div>
				<div id="trainingModsWrap">
					<div class="columnTitle">
						<h5>Mods</h5>
					</div>
					<button class="modBtn modIgnored ui-button ui-corner-all ui-widget" id="mod_nm">NoMod</button>
					<input class="modLabel" type="hidden" name="mod_nm" value="0">
					<button class="modBtn modIgnored ui-button ui-corner-all ui-widget" id="mod_hd">HD</button>
					<input class="modLabel" type="hidden" name="mod_hd" value="0">
					<button class="modBtn ui-button ui-corner-all ui-widget modEnabled" id="mod_hr">HR</button>
					<input class="modLabel" type="hidden" name="mod_hr" value="1">
					<button class="modBtn modIgnored ui-button ui-corner-all ui-widget" id="mod_dt">DT</button>
					<input class="modLabel" type="hidden" name="mod_dt" value="0">
					<button class="modBtn modDisabled ui-button ui-corner-all ui-widget" id="mod_fl">FL</button>
					<input class="modLabel" type="hidden" name="mod_fl" value="2">
					<button class="modBtn modDisabled ui-button ui-corner-all ui-widget" id="mod_ez">EZ</button>
					<input class="modLabel" type="hidden" name="mod_ez" value="2">
					<button class="modBtn modDisabled ui-button ui-corner-all ui-widget" id="mod_ht">HT</button>
					<input class="modLabel" type="hidden" name="mod_ht" value="2">
				</div>
				<div class="g-recaptcha" id="captchaFindMaps" data-callback="captchaFindMapsFunc" data-sitekey="6Leh0yATAAAAAFngkAixeAYRXbXghq7ctoIH7C32" style="display: none;"><div style="width: 304px; height: 78px;"><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Leh0yATAAAAAFngkAixeAYRXbXghq7ctoIH7C32&amp;co=aHR0cDovL3d3dy5vc3Vza2lsbHMuY29tOjgw&amp;hl=en&amp;v=2Mfykwl2mlvyQZQ3PEgoH710&amp;size=normal&amp;cb=v1wknzlkpi0c" width="304" height="78" role="presentation" name="a-8ni5xi1w3s2l" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response-1" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
				<button id="findMaps" class="mainBtn hvr-bounce-to-right" type="submit" value="Find maps" style="display: block;">Find maps <i class="fa fa-search" data-fa-transform="flip-h"></i></button>
				<input id="maps" type="hidden">
			</div>
		</div>
		
		<div class="wrapper_full">
		<table class="tablesorter">
			<thead>
			  <tr>
				<th class="header">Map</th>
				<th class="header">Sta</th>
				<th class="header">Ten</th>
				<th class="header">Agi</th>
				<th class="header">Acc</th>
				<th class="header">Pre</th>
				<th class="header">Reac</th>
				<th class="header">Mem</th>
				<!-- <th>Read</th> -->
			  </tr>
			</thead>
			<tbody><tr><td><a href="http://osu.ppy.sh/b/521457">Goose house - Hikaru nara -TV size-</a> (Mei) [Hard] <span class="mods">+DTHR</span></td><td>170</td><td>5</td><td>296</td><td>522</td><td>322</td><td>849</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2599512">Receptor &amp; K.I.R.A - Lullaby (Cut Ver.)</a> (Shmiklak) [Normal] <span class="mods">+HDDTHR</span></td><td>146</td><td>63</td><td>279</td><td>277</td><td>176</td><td>349</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2252715">THE ORAL CIGARETTES - Youshi Tanrei na Uso</a> (Maiev) [Asuka_-'s Hard] <span class="mods">+HDHR</span></td><td>171</td><td>154</td><td>276</td><td>359</td><td>175</td><td>448</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2232761">Feint - Words (feat. Laura Brehm)</a> (Nao Tomori) [Hard] <span class="mods">+HDHR</span></td><td>195</td><td>0</td><td>271</td><td>331</td><td>174</td><td>448</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/194227">8#Prince - fake doll</a> (y u c a) [Hard] <span class="mods">+HDHR</span></td><td>210</td><td>0</td><td>314</td><td>415</td><td>331</td><td>408</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/38303">Owl City - Fireflies</a> (YoshiKart) [Normal] <span class="mods">+HDDTHR</span></td><td>131</td><td>141</td><td>278</td><td>293</td><td>176</td><td>215</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2779583">Jake Kaufman - High Above the Land</a> (Krisom) [Moody's Mesosphere] <span class="mods">+HR</span></td><td>166</td><td>0</td><td>303</td><td>483</td><td>325</td><td>421</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2163273">yanaginagi - Harumodoki (TV Size)</a> (In your heart) [Hard] <span class="mods">+HDHR</span></td><td>183</td><td>183</td><td>275</td><td>515</td><td>311</td><td>448</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/872819">Camellia - crystallized</a> (Smoothie World) [Anxient's Hard] <span class="mods">+HDDTHR</span></td><td>424</td><td>148</td><td>306</td><td>878</td><td>326</td><td>731</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/34328">NicoNico Chorus, Megurine Luka - Just Be Friends</a> (Shinxyn) [Hard] <span class="mods">+HDHR</span></td><td>242</td><td>320</td><td>289</td><td>731</td><td>319</td><td>408</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/428991">wa. - Sora no Kanata</a> (Liiraye) [Asphyxia's Hard] <span class="mods">+HR</span></td><td>259</td><td>91</td><td>286</td><td>425</td><td>317</td><td>466</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/271638">ALI PROJECT - Watashi no Bara o Haminasai (TV Size)</a> (Flower) [Insane] <span class="mods">+HR</span></td><td>242</td><td>308</td><td>302</td><td>680</td><td>508</td><td>468</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2343590">Poppin'Party - SAKURA MEMORIES</a> (Chitanda Eru) [Sytho's Hard] <span class="mods">+HDHR</span></td><td>173</td><td>2</td><td>275</td><td>309</td><td>175</td><td>448</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/570916">BRILLIANT4 - Subarashiki FUN!TASY</a> (Kawaiwkyik) [eINess' Hard] <span class="mods">+HDDTHR</span></td><td>309</td><td>135</td><td>310</td><td>759</td><td>328</td><td>804</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/47464">Karen - Vampire</a> (Nekomiya Nono) [Hard] <span class="mods">+HR</span></td><td>286</td><td>366</td><td>301</td><td>655</td><td>324</td><td>424</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/313213">L.E.D. Vs. Yuuhei Satellite - Torikago no Houou</a> (10nya) [Hinely's Hyper] <span class="mods">+HDHR</span></td><td>185</td><td>0</td><td>297</td><td>347</td><td>322</td><td>406</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2277825">Nekrogoblikon - Mold</a> (Icekalt) [Nao's Hard] <span class="mods">+HDHR</span></td><td>287</td><td>92</td><td>298</td><td>483</td><td>181</td><td>448</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/1181039">Delta Heavy - Ghost</a> (MashaSG) [Danii's Hard] <span class="mods">+HDHR</span></td><td>113</td><td>1</td><td>287</td><td>242</td><td>318</td><td>448</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/23254">My Chemical Romance - Welcome to the Black Parade</a> (MetalMario201) [Grand Marshal] <span class="mods">+DTHR</span></td><td>272</td><td>152</td><td>279</td><td>750</td><td>490</td><td>444</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/87502">Liberatus - Dolls Garden</a> (soulfear) [Another] <span class="mods">+HR</span></td><td>368</td><td>446</td><td>291</td><td>919</td><td>499</td><td>466</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/512188">Otokaze - KaeriMichi</a> (Narcissu) [Hyper] <span class="mods">+HR</span></td><td>141</td><td>129</td><td>296</td><td>477</td><td>322</td><td>466</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/49068">COOL&amp;CREATE - Rapid Ensemble</a> (Doomsday93) [Normal] <span class="mods">+HDDTHR</span></td><td>117</td><td>166</td><td>301</td><td>241</td><td>324</td><td>215</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2240737">The Chainsmokers &amp; Bebe Rexha - Call You Mine (Hibell Remix)</a> (Asphyxia) [KKip's Hard] <span class="mods">+HR</span></td><td>155</td><td>111</td><td>308</td><td>364</td><td>184</td><td>468</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/1669058">HachioujiP feat. Hatsune Miku - take it easy</a> (Seto Kousuke) [Nayarii's Hard] <span class="mods">+HR</span></td><td>124</td><td>68</td><td>285</td><td>468</td><td>178</td><td>468</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/736720">Camellia - Fastest Crash</a> (sukiNathan) [Hard] <span class="mods">+DTHR</span></td><td>325</td><td>200</td><td>306</td><td>749</td><td>327</td><td>849</td><td>0</td></tr></tbody>
		</table>
		</div>		</div>
	
	<div class="footer">
		<div class="footerContent">
			<div id="footerInfo">
				<div>
					osu!Skills is made by Kert, abraker, FullTablet, RuSt (2020)
				</div>
				<div>
					Contact us in-game or in our official thread at <a href="https://osu.ppy.sh/forum/t/367283">https://osu.ppy.sh/forum/t/367283</a>
				</div>
			</div>
			<div id="themeSwitch">
				<button type="submit" id="themeSwitchButton"></button>
				<img id="themeSwitchImage" src="/template/images/powerButtonWhite.svg" alt="Light">
			</div>
		</div>
	</div>	

<div style="background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px; position: absolute; transition: visibility 0s linear 0.3s, opacity 0.3s linear 0s; opacity: 0; visibility: hidden; z-index: 2000000000; left: 0px; top: -10000px;"><div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: rgb(255, 255, 255); opacity: 0.05;"></div><div class="g-recaptcha-bubble-arrow" style="border: 11px solid transparent; width: 0px; height: 0px; position: absolute; pointer-events: none; margin-top: -11px; z-index: 2000000000;"></div><div class="g-recaptcha-bubble-arrow" style="border: 10px solid transparent; width: 0px; height: 0px; position: absolute; pointer-events: none; margin-top: -10px; z-index: 2000000000;"></div><div style="z-index: 2000000000; position: relative;"><iframe title="recaptcha challenge" src="https://www.google.com/recaptcha/api2/bframe?hl=en&amp;v=2Mfykwl2mlvyQZQ3PEgoH710&amp;k=6Leh0yATAAAAAFngkAixeAYRXbXghq7ctoIH7C32&amp;cb=383pxk8o40ns" name="c-6t5eijej3vg6" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" style="width: 100%; height: 100%;"></iframe></div></div><div style="background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px; position: absolute; transition: visibility 0s linear 0.3s, opacity 0.3s linear 0s; opacity: 0; visibility: hidden; z-index: 2000000000; left: 0px; top: -10000px;"><div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: rgb(255, 255, 255); opacity: 0.05;"></div><div class="g-recaptcha-bubble-arrow" style="border: 11px solid transparent; width: 0px; height: 0px; position: absolute; pointer-events: none; margin-top: -11px; z-index: 2000000000;"></div><div class="g-recaptcha-bubble-arrow" style="border: 10px solid transparent; width: 0px; height: 0px; position: absolute; pointer-events: none; margin-top: -10px; z-index: 2000000000;"></div><div style="z-index: 2000000000; position: relative;"><iframe title="recaptcha challenge" src="https://www.google.com/recaptcha/api2/bframe?hl=en&amp;v=2Mfykwl2mlvyQZQ3PEgoH710&amp;k=6Leh0yATAAAAAFngkAixeAYRXbXghq7ctoIH7C32&amp;cb=ellhj7xa9qdd" name="c-8ni5xi1w3s2l" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" style="width: 100%; height: 100%;"></iframe></div></div></body></html>`;
}

function nomods() {
    return `
    <html><script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/2Mfykwl2mlvyQZQ3PEgoH710/recaptcha__en.js" crossorigin="anonymous" integrity="sha384-Cx10SI4nRyIf/4CfTL8bj2s8I5ccz18HDscUBxSzsbe1SPnhchceoHtCw2m0nc/h"></script><script async="" src="//www.google-analytics.com/analytics.js"></script><script type="text/javascript">window["_gaUserPrefs"] = { ioo : function() { return true; } }</script><head>		
        <title>Training | osu!Skills</title>
        <!-- favicon section -->
        <link rel="apple-touch-icon" sizes="57x57" href="/template/images/favicons/apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/template/images/favicons/apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/template/images/favicons/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/template/images/favicons/apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/template/images/favicons/apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/template/images/favicons/apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/template/images/favicons/apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/template/images/favicons/apple-touch-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/template/images/favicons/apple-touch-icon-180x180.png">
        <link rel="icon" type="image/png" href="/template/images/favicons/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/template/images/favicons/android-chrome-192x192.png" sizes="192x192">
        <link rel="icon" type="image/png" href="/template/images/favicons/favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="/template/images/favicons/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="./template/images/favicons/manifest.json">
        <link rel="shortcut icon" href="/template/images/favicons/favicon.ico">
        <meta name="msapplication-TileColor" content="#44aadd">
        <meta name="msapplication-TileImage" content="/template/images/favicons/mstile-144x144.png">
        <meta name="msapplication-config" content="/template/images/favicons/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- /favicon section -->	
        <link href="https://fonts.googleapis.com/css?family=Exo+2:400,600,600italic,800italic&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css">
        <link href="/template/css/font-awesome.css" rel="stylesheet" type="text/css">
        <link href="/template/css/flag-icon.css" rel="stylesheet" type="text/css">
        <link href="/template/css/jquery-ui.css" rel="stylesheet" type="text/css">
        <link href="/template/css/styleDark.css" id="theme_css" rel="stylesheet" type="text/css">
        <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
        <!-- <script src="/template/js/jquery-ui.min.js"></script> -->
        <script src="/template/js/jquery.redirect.js"></script>
        <script src="/template/js/jquery.timeago.js"></script>
        <script src="/template/js/jquery.spoiler.min.js"></script>
        <script src="/template/js/ga.js?1612619829"></script>
        <script src="/template/js/themeChanger.js"></script>
        <script src="/pages/training/script.js"></script>
        <script src="https://www.google.com/recaptcha/api.js"></script>
        <script src="/template/js/jquery-ui.min.js"></script>
        <script src="/template/js/jquery.ui.touch-punch.min.js"></script>
        <script src="/template/js/jquery.tablesorter.min.js"></script>	
    </head>
    <body>
        <div id="pageHeader">
            <div class="headerContent">
                <h1>
                    <a href="/">
                        osu!Skills<span class="small"> Beta</span>
                    </a>
                </h1>
                <a class="logo" id="headerLogo" href="/" style="background-image: url(&quot;/template/images/logo_120_dark.png&quot;);"></a>
                <nav>
                    <ul><li class="dropdown"><span>Rankings&nbsp;<i class="fa fa-angle-down"></i></span><ul><li><a href="/top/stamina">Stamina</a></li><li><a href="/top/tenacity">Tenacity</a></li><li><a href="/top/agility">Agility</a></li><li><a href="/top/accuracy">Accuracy</a></li><li><a href="/top/precision">Precision</a></li><li><a href="/top/reaction">Reaction</a></li><li><a href="/top/memory">Memory</a></li></ul></li><li class="dropdown"><span>Tools&nbsp;<i class="fa fa-angle-down"></i></span><ul><li><a href="/versus">Versus</a></li><li><a href="/training">Training</a></li></ul></li><li><a href="/faq">FAQ</a></li><li><a href="/donate">Donate</a></li></ul>			</nav>
            </div>
        </div>
        <div class="subHeader">
        </div>
        <div class="wrap">
            <div class="content">
            <div class="columnTitle">
                    <h5>Training</h5>
                </div>
                <div id="trainingWrap">
                    <p>Are you looking for personalized recommendations? (optional) </p>
                    <input class="versusInput" id="username" type="text" name="username" placeholder="Enter playername" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                    <div class="g-recaptcha" id="captchaUsername" data-callback="captchaUsernameFunc" data-sitekey="6Leh0yATAAAAAFngkAixeAYRXbXghq7ctoIH7C32" style="display: none;"><div style="width: 304px; height: 78px;"><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Leh0yATAAAAAFngkAixeAYRXbXghq7ctoIH7C32&amp;co=aHR0cDovL3d3dy5vc3Vza2lsbHMuY29tOjgw&amp;hl=en&amp;v=2Mfykwl2mlvyQZQ3PEgoH710&amp;size=normal&amp;cb=1qlzzek8g7oo" width="304" height="78" role="presentation" name="a-azvch4ul8sxj" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div></div>
                    <button id="loadPlayer" class="mainBtn hvr-bounce-to-right" type="submit" value="Load skills" style="display: block;">Load skills</button>
                    <div id="trainingColumnsWrap">
                    
                        <div id="recWrap">
                        <div class="columnTitle">
                            <h5>Skill selection</h5>
                        </div>
                            <button id="btn-reset" class="presetResetBtn">Reset</button>
                            <div class="rec">
                                <label for="staminaCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget">Stamina</label>
                                <input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="staminaIgnored" id="staminaCheckbox">
                                <div id="staminaSlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 20.65%; width: 3.45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 20.65%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 24.1%;"></span></div>
                                <input type="text" name="staminaMin" class="trainingIntervalInput min" value="100">
                                <input type="text" name="staminaMax" class="trainingIntervalInput max" value="1000">
                            </div>		
                            <div class="rec">
                                <label for="tenacityCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget">Tenacity</label>
                                <input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="tenacityIgnored" id="tenacityCheckbox">
                                <div id="tenacitySlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 22.95%; width: 3.85%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 22.95%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 26.8%;"></span></div>
                                <input type="text" name="tenacityMin" class="trainingIntervalInput min" value="100">
                                <input type="text" name="tenacityMax" class="trainingIntervalInput max" value="1000">
                            </div>		
                            <div class="rec">
                                <label for="agilityCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">Agility</label>
                                <input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="agilityIgnored" id="agilityCheckbox">
                                <div id="agilitySlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content ui-slider-disabled ui-state-disabled"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 35.35%; width: 5.85%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 35.35%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 41.2%;"></span></div>
                                <input type="text" name="agilityMin" class="trainingIntervalInput min" value="100" disabled="">
                                <input type="text" name="agilityMax" class="trainingIntervalInput max" value="1000" disabled="">
                            </div>
                            <div class="rec">
                                <label for="accuracyCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">Accuracy</label>
                                <input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="accuracyIgnored" id="accuracyCheckbox">
                                <div id="accuracySlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content ui-slider-disabled ui-state-disabled"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 21.4%; width: 3.55%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 21.4%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 24.95%;"></span></div>
                                <input type="text" name="accuracyMin" class="trainingIntervalInput min" value="100" disabled="">
                                <input type="text" name="accuracyMax" class="trainingIntervalInput max" value="1000" disabled="">
                            </div>
                            <div class="rec">
                                <label for="precisionCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">Precision</label>
                                <input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="precisionIgnored" id="precisionCheckbox">
                                <div id="precisionSlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content ui-slider-disabled ui-state-disabled"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 17%; width: 2.85%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 17%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 19.85%;"></span></div>
                                <input type="text" name="precisionMin" class="trainingIntervalInput min" value="100" disabled="">
                                <input type="text" name="precisionMax" class="trainingIntervalInput max" value="1000" disabled="">
                            </div>
                            <div class="rec">
                                <label for="reactionCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">Reaction</label>
                                <input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="reactionIgnored" id="reactionCheckbox">
                                <div id="reactionSlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content ui-slider-disabled ui-state-disabled"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 21.4%; width: 3.55%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 21.4%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 24.95%;"></span></div>
                                <input type="text" name="reactionMin" class="trainingIntervalInput min" value="100" disabled="">
                                <input type="text" name="reactionMax" class="trainingIntervalInput max" value="1000" disabled="">
                            </div>
                            <div class="rec">
                                <label for="memoryCheckbox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-checked ui-state-active">Memory</label>
                                <input class="skillLabel ui-checkboxradio ui-helper-hidden-accessible" type="checkbox" name="memoryIgnored" id="memoryCheckbox" checked="">
                                <div id="memorySlider" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content ui-slider-disabled ui-state-disabled"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 0%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span></div>
                                <input type="text" name="memoryMin" class="trainingIntervalInput min" value="100" disabled="">
                                <input type="text" name="memoryMax" class="trainingIntervalInput max" value="1000" disabled="">
                            </div>
                        </div>
                        
                        <div id="presetsWrap">
                            <div class="columnTitle">
                                <h5>Presets</h5>
                            </div>
                            <button id="btn-streamy" class="presetBtn">Streamy</button>
                            <button id="btn-tinycircles" class="presetBtn">Tiny Circles</button>
                            <button id="btn-rhythm" class="presetBtn">Rhythm</button>
                            <button id="btn-fastaim" class="presetBtn">Fast aim</button>
                            <button id="btn-sightreading" class="presetBtn">Sight-reading</button>
                            <button id="btn-memory" class="presetBtn">Memory</button>
                            <button id="btn-inthezone" class="presetBtn">In the zone (+4%)</button>
                            <button id="btn-nevergiveup" class="presetBtn">Never give up (+15%)</button>
                            <button id="btn-bringiton" class="presetBtn">Bring it on! (+25%)</button>
                            <button id="btn-relaxed" class="presetBtn">Relaxed (-10%)</button>
                        </div>
                    </div>
                    <div id="trainingModsWrap">
                        <div class="columnTitle">
                            <h5>Mods</h5>
                        </div>
                        <button class="modBtn ui-button ui-corner-all ui-widget modEnabled" id="mod_nm">NoMod</button>
                        <input class="modLabel" type="hidden" name="mod_nm" value="1">
                        <button class="modBtn ui-button ui-corner-all ui-widget modDisabled" id="mod_hd">HD</button>
                        <input class="modLabel" type="hidden" name="mod_hd" value="2">
                        <button class="modBtn ui-button ui-corner-all ui-widget modDisabled" id="mod_hr">HR</button>
                        <input class="modLabel" type="hidden" name="mod_hr" value="2">
                        <button class="modBtn ui-button ui-corner-all ui-widget modDisabled" id="mod_dt">DT</button>
                        <input class="modLabel" type="hidden" name="mod_dt" value="2">
                        <button class="modBtn modDisabled ui-button ui-corner-all ui-widget" id="mod_fl">FL</button>
                        <input class="modLabel" type="hidden" name="mod_fl" value="2">
                        <button class="modBtn modDisabled ui-button ui-corner-all ui-widget" id="mod_ez">EZ</button>
                        <input class="modLabel" type="hidden" name="mod_ez" value="2">
                        <button class="modBtn modDisabled ui-button ui-corner-all ui-widget" id="mod_ht">HT</button>
                        <input class="modLabel" type="hidden" name="mod_ht" value="2">
                    </div>
                    <div class="g-recaptcha" id="captchaFindMaps" data-callback="captchaFindMapsFunc" data-sitekey="6Leh0yATAAAAAFngkAixeAYRXbXghq7ctoIH7C32" style="display: none;"><div style="width: 304px; height: 78px;"><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Leh0yATAAAAAFngkAixeAYRXbXghq7ctoIH7C32&amp;co=aHR0cDovL3d3dy5vc3Vza2lsbHMuY29tOjgw&amp;hl=en&amp;v=2Mfykwl2mlvyQZQ3PEgoH710&amp;size=normal&amp;cb=cu9nfgcbbd4a" width="304" height="78" role="presentation" name="a-r3gio1zfthzn" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response-1" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
                    <button id="findMaps" class="mainBtn hvr-bounce-to-right" type="submit" value="Find maps" style="display: block;">Find maps <i class="fa fa-search" data-fa-transform="flip-h"></i></button>
                    <input id="maps" type="hidden">
                </div>
            </div>
            
            <div class="wrapper_full">
            <table class="tablesorter">
                <thead>
                  <tr>
                    <th class="header">Map</th>
                    <th class="header">Sta</th>
                    <th class="header">Ten</th>
                    <th class="header">Agi</th>
                    <th class="header">Acc</th>
                    <th class="header">Pre</th>
                    <th class="header">Reac</th>
                    <th class="header">Mem</th>
                    <!-- <th>Read</th> -->
                  </tr>
                </thead>
                <tbody><tr><td><a href="http://osu.ppy.sh/b/244224">loz - Cinderella Cage -Trancecore Mix-</a> (RikiH_) [Another] <span class="mods"></span></td><td>463</td><td>492</td><td>390</td><td>397</td><td>215</td><td>303</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2656918">ARForest - Qesia</a> (Log Off Now) [Extra] <span class="mods"></span></td><td>446</td><td>517</td><td>454</td><td>707</td><td>129</td><td>326</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/124501">SUPER STAR -MITSURU- - SA.YO.NA.RA. SUPER STAR</a> (yeahyeahyeahhh) [Another] <span class="mods"></span></td><td>427</td><td>491</td><td>310</td><td>508</td><td>194</td><td>217</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/1948259">Roselia - Ringing Bloom</a> (newton-) [Firis' Hopeless Extreme] <span class="mods"></span></td><td>452</td><td>486</td><td>516</td><td>526</td><td>243</td><td>341</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/291553">yuikonnu - Genjitsu Game</a> (Amamiya Yuko) [Extra] <span class="mods"></span></td><td>477</td><td>497</td><td>418</td><td>564</td><td>222</td><td>303</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2145646">Johnny Berglund - Angry Nu Metal Trailer No3</a> (NeKroMan4ik) [Extra] <span class="mods"></span></td><td>428</td><td>497</td><td>510</td><td>531</td><td>242</td><td>326</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/171256">paraoka - boot</a> (Laurier) [0108] <span class="mods"></span></td><td>445</td><td>468</td><td>491</td><td>428</td><td>238</td><td>302</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/1345674">Kaneko Chiharu - iLLness LiLin</a> (Kroytz) [Pono's INFINITE] <span class="mods"></span></td><td>480</td><td>485</td><td>395</td><td>501</td><td>122</td><td>327</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2099676">Fractal Dreamers - Gardens Under A Spring Sky</a> ([Mahua]) [Under] <span class="mods"></span></td><td>477</td><td>498</td><td>423</td><td>581</td><td>349</td><td>303</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2410430">MuryokuP - A tree without a branch</a> (Sylvarus) [Ikikaera's Extra (#2)] <span class="mods"></span></td><td>434</td><td>459</td><td>479</td><td>544</td><td>236</td><td>321</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/487951">TRakker - Trail of Dust</a> (Amamiya Yuko) [Trail of Star] <span class="mods"></span></td><td>464</td><td>515</td><td>510</td><td>615</td><td>242</td><td>341</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/344715">MYTK - Yggdrasil</a> (P o M u T a) [INFINITE] <span class="mods"></span></td><td>440</td><td>509</td><td>452</td><td>398</td><td>230</td><td>302</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/2049339">Yumeno Yuki - BWLAUTE BEIRRD</a> (Lasse) [Delis' Extra] <span class="mods"></span></td><td>462</td><td>525</td><td>540</td><td>672</td><td>248</td><td>303</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/1629799">sasakure.UK - ChRoNiClESeVeN feat. Annabel</a> (AIR) [Flora] <span class="mods"></span></td><td>445</td><td>508</td><td>519</td><td>571</td><td>244</td><td>341</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/300689">DystopiaGround - AugoEidEs</a> (Amamiya Yuko) [nao] <span class="mods"></span></td><td>478</td><td>508</td><td>523</td><td>624</td><td>245</td><td>300</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/1957224">Ceui - Asphodelus (Liquid Bass Mix)</a> (-Tochi) [Garden/Patio] <span class="mods"></span></td><td>420</td><td>507</td><td>500</td><td>580</td><td>240</td><td>340</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/1391282">Infected Mushroom - The Pretender</a> (DavidEd) [Ignorance] <span class="mods"></span></td><td>424</td><td>499</td><td>414</td><td>595</td><td>124</td><td>303</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/1039439">Underoath - Coming Down Is Calming Down</a> (pishifat) [Extra] <span class="mods"></span></td><td>472</td><td>461</td><td>483</td><td>586</td><td>236</td><td>327</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/306669">8284 vs wa. - Adularescence</a> (Cherry Blossom) [Extra] <span class="mods"></span></td><td>447</td><td>520</td><td>434</td><td>531</td><td>226</td><td>302</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/132167">Galdeira - Almagest</a> (Shiirn) [Another] <span class="mods"></span></td><td>450</td><td>533</td><td>430</td><td>530</td><td>225</td><td>302</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/725920">Fear, and Loathing in Las Vegas - Chase the Light! <tv size=""></tv></a> (handsome) [Kaiji is Moe] <span class="mods"></span></td><td>435</td><td>503</td><td>448</td><td>640</td><td>358</td><td>353</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/335800">Nekomata Master+ - squall</a> (Reisen Udongein) [Muya's Another] <span class="mods"></span></td><td>414</td><td>475</td><td>409</td><td>519</td><td>220</td><td>302</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/1588264">Kano - Ama no Jaku</a> (Realazy) [Divulgence] <span class="mods"></span></td><td>436</td><td>497</td><td>606</td><td>721</td><td>146</td><td>355</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/1495657">ayaponzu* - Yakubyougami</a> (Pho) [Collab Extra] <span class="mods"></span></td><td>447</td><td>480</td><td>516</td><td>571</td><td>243</td><td>340</td><td>0</td></tr><tr><td><a href="http://osu.ppy.sh/b/1205981">FELT - Lies in Reality</a> (Frostings) [Albatross] <span class="mods"></span></td><td>458</td><td>474</td><td>576</td><td>824</td><td>255</td><td>371</td><td>0</td></tr></tbody>
            </table>
            </div>		</div>
        
        <div class="footer">
            <div class="footerContent">
                <div id="footerInfo">
                    <div>
                        osu!Skills is made by Kert, abraker, FullTablet, RuSt (2020)
                    </div>
                    <div>
                        Contact us in-game or in our official thread at <a href="https://osu.ppy.sh/forum/t/367283">https://osu.ppy.sh/forum/t/367283</a>
                    </div>
                </div>
                <div id="themeSwitch">
                    <button type="submit" id="themeSwitchButton"></button>
                    <img id="themeSwitchImage" src="/template/images/powerButtonWhite.svg" alt="Light">
                </div>
            </div>
        </div>	
    
    <div style="background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px; position: absolute; transition: visibility 0s linear 0.3s, opacity 0.3s linear 0s; opacity: 0; visibility: hidden; z-index: 2000000000; left: 0px; top: -10000px;"><div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: rgb(255, 255, 255); opacity: 0.05;"></div><div class="g-recaptcha-bubble-arrow" style="border: 11px solid transparent; width: 0px; height: 0px; position: absolute; pointer-events: none; margin-top: -11px; z-index: 2000000000;"></div><div class="g-recaptcha-bubble-arrow" style="border: 10px solid transparent; width: 0px; height: 0px; position: absolute; pointer-events: none; margin-top: -10px; z-index: 2000000000;"></div><div style="z-index: 2000000000; position: relative;"><iframe title="recaptcha challenge" src="https://www.google.com/recaptcha/api2/bframe?hl=en&amp;v=2Mfykwl2mlvyQZQ3PEgoH710&amp;k=6Leh0yATAAAAAFngkAixeAYRXbXghq7ctoIH7C32&amp;cb=52frpcqjnb4n" name="c-azvch4ul8sxj" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" style="width: 100%; height: 100%;"></iframe></div></div><div style="background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px; position: absolute; transition: visibility 0s linear 0.3s, opacity 0.3s linear 0s; opacity: 0; visibility: hidden; z-index: 2000000000; left: 0px; top: -10000px;"><div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: rgb(255, 255, 255); opacity: 0.05;"></div><div class="g-recaptcha-bubble-arrow" style="border: 11px solid transparent; width: 0px; height: 0px; position: absolute; pointer-events: none; margin-top: -11px; z-index: 2000000000;"></div><div class="g-recaptcha-bubble-arrow" style="border: 10px solid transparent; width: 0px; height: 0px; position: absolute; pointer-events: none; margin-top: -10px; z-index: 2000000000;"></div><div style="z-index: 2000000000; position: relative;"><iframe title="recaptcha challenge" src="https://www.google.com/recaptcha/api2/bframe?hl=en&amp;v=2Mfykwl2mlvyQZQ3PEgoH710&amp;k=6Leh0yATAAAAAFngkAixeAYRXbXghq7ctoIH7C32&amp;cb=rjl6p5x2y72m" name="c-r3gio1zfthzn" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" style="width: 100%; height: 100%;"></iframe></div></div></body></html>
    `;
}
