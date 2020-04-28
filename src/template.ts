import { Options } from "./types";

export const template = (o: Options) => {
	return {
		name: o.name,
		type: 'dark',
		colors: {
			'editor.background': '#080808',
			// "editor.background": "#0x20b19",
			'editor.foreground': '#eeffff',
			'quickInput.background': '#080808',
			'quickInput.foreground': '#eeffff',

			'editorOverviewRuler.findMatchForeground': '#ff00f2',
			// panel
			'panel.background': '#080808',
			'panel.border': '#0D3A58',
			'panelTitle.activeBorder': o.colors.strings,
			'panelTitle.activeForeground': '#0D3A58',
			'panelTitle.inactiveForeground': '#6d8996',

			'editor.findMatchBackground': o.colors.objectkeys,
			'editor.findMatchBorder': '#0D3A58',
			'editor.findMatchHighlightBackground': '#0f64e471',
			'editor.findMatchHighlightBorder': o.colors.objectkeys,
			'editor.selectionBackground': o.colors.controlflow,
			// "editorBracketMatch.border": "#29e2e2",
			'editor.selectionHighlightBackground': '#3f51b588',
			'editorIndentGuide.activeBackground': '#929000',
			// This section is for testing cobalt
			//
			// https://github.com/wesbos/cobalt2-vscode/blob/master/theme/cobalt2.json#L125-L135
			'input.background': '#080808', //search bar color
			'input.border': '#0D3A58', //search bar border
			'input.foreground': o.colors.strings,
			'input.placeholderForeground': '#aaa',
			'inputOption.activeBorder': o.colors.classname,
			'inputValidation.errorBackground': '#193549',
			'inputValidation.errorBorder': '#0D3A58',
			'inputValidation.infoBackground': '#193549',
			'inputValidation.infoBorder': '#0D3A58',
			'inputValidation.warningBackground': '#193549',
			'inputValidation.warningBorder': '#ffc600',
			'selection.background': '#b4004e',
			// Git status colors in File Explorer
			// https://github.com/wesbos/cobalt2-vscode/blob/master/theme/cobalt2.json#L248-L253
			'gitDecoration.modifiedResourceForeground': o.colors.strings,
			'gitDecoration.deletedResourceForeground': o.colors.controlflow,
			'gitDecoration.untrackedResourceForeground': o.colors.classname,
			'gitDecoration.ignoredResourceForeground': o.colors.controlflow,
			'gitDecoration.conflictingResourceForeground': o.colors.controlflow,
			// activityBar
			// https://github.com/wesbos/cobalt2-vscode/blob/master/theme/cobalt2.json#L6-L12
			'activityBar.border': '#0D3A58', //sidebar border
			'activityBar.dropBackground': '#0d3a58',
			'activityBar.foreground': '#fff',
			'activityBarBadge.foreground': '#000',
			'activityBarBadge.background': o.colors.strings,
			'activityBar.inactiveForeground': '#6f7683',
			'activityBar.background': '#080808',
			// badge
			// https://github.com/wesbos/cobalt2-vscode/blob/master/theme/cobalt2.json#L13-L15
			'badge.background': '#ffc600',
			'badge.foreground': '#000',
			// button
			'button.background': '#0088ff',
			'button.foreground': '#fff',
			'button.hoverBackground': '#ff9d00',
			// contrast
			// "contrastActiveBorder": null,
			contrastBorder: '#ffffff00',
			// debug
			'debugExceptionWidget.background': '#193549',
			'debugExceptionWidget.border': '#aaa',
			'debugToolBar.background': '#193549',
			// description
			descriptionForeground: '#aaa',
			// diff
			'diffEditor.insertedTextBackground': '#3ad90033',
			'diffEditor.insertedTextBorder': '#3ad90055',
			'diffEditor.removedTextBackground': '#ee3a4333',
			'diffEditor.removedTextBorder': '#ee3a4355',
			// dropdown
			'dropdown.background': '#193549', // output window
			'dropdown.border': '#15232d',
			'dropdown.foreground': '#fff',
			// "editor.hoverHighlightBackground": "#ffc60033",
			'editor.inactiveSelectionBackground': '#193549',
			// current line styles
			'editor.lineHighlightBackground': '#000000',
			'editor.lineHighlightBorder': '#0D3A58',
			//    "editor.rangeHighlightBackground": "#1F4662",
			// and this one is the rest of them
			'editor.wordHighlightBackground': '#7ce1ee33',
			'editorBracketMatch.background': '#0d3a58',
			'editorBracketMatch.border': '#ffc60080',
			'editorCodeLens.foreground': '#aaa',
			'editorCursor.foreground': '#ffc600',
			// "editorError.border": "#0d3a58",
			// "editorError.foreground": "#A22929",
			// gutter
			'editorGutter.background': '#080808',
			'editorGutter.addedBackground': '#99ffee8a',
			'editorGutter.deletedBackground': o.colors.red.a,
			'editorGutter.modifiedBackground': '#568beed2',
			// editorGroup
			// "editorGroup.background": "#A22929",
			'editorGroup.border': '#122738',
			'editorGroup.dropBackground': '#12273899',
			// editorHoverWidget
			'editorHoverWidget.background': '#15232d',
			'editorHoverWidget.border': '#0d3a58',
			'editorIndentGuide.background': '#3B5364',
			'editorLineNumber.foreground': '#aaa',
			'editorLineNumber.activeForeground': '#ffc600',
			'editorLink.activeForeground': '#aaa',
			// editorMarkerNavigation
			'editorMarkerNavigation.background': '#3B536433',
			'editorMarkerNavigationError.background': '#A22929',
			'editorMarkerNavigationWarning.background': '#ffc600',
			// ruler
			'editorOverviewRuler.border': '#0d3a58',
			'editorOverviewRuler.commonContentForeground': '#ffc60055',
			'editorOverviewRuler.currentContentForeground': '#ee3a4355',
			'editorOverviewRuler.incomingContentForeground': '#3ad90055',
			'editorRuler.foreground': '#1F4662',
			'editorSuggestWidget.background': '#01132e', //"#15232d", //autocomplete intellisense backgroun
			'editorSuggestWidget.border': '#15232d',
			'editorSuggestWidget.foreground': '#aaa',
			'editorSuggestWidget.highlightForeground': '#ffc600',
			'editorSuggestWidget.selectedBackground': '#193549',
			// editorWarning
			'editorWarning.border': '#ffffff00',
			'editorWarning.foreground': '#ffc600',
			'editorWhitespace.foreground': '#ffffff1a',
			'editorWidget.background': '#15232d',
			'editorWidget.border': '#0d3a58',
			errorForeground: '#A22929',
			// error squiggles
			'editorError.foreground': '#ff0000',
			'editorError.border': o.colors.red.a,
			// extensionButton
			'extensionButton.prominentBackground': '#0088ff',
			'extensionButton.prominentForeground': '#fff',
			'extensionButton.prominentHoverBackground': '#ff9d00',
			focusBorder: '#0d3a58',
			foreground: '#aaa',
			'list.activeSelectionBackground': '#193549',
			'list.activeSelectionForeground': '#fff',
			'list.dropBackground': '#0d3a58',
			'list.focusBackground': '#0d3a58',
			'list.focusForeground': o.colors.strings, //command pallette active selection text
			'list.highlightForeground': o.colors.controlflow,
			'list.hoverBackground': '#193549',
			'list.hoverForeground': '#aaa',
			'list.inactiveSelectionBackground': '#0d3a58',
			'list.inactiveSelectionForeground': '#aaa',
			// merge
			'merge.border': '#ffffff00',
			'merge.commonContentBackground': '#c97d0c',
			'merge.commonHeaderBackground': '#c97d0c',
			'merge.currentContentBackground': '#2F7366',
			'merge.currentHeaderBackground': '#2F7366',
			'merge.incomingContentBackground': '#185294',
			'merge.incomingHeaderBackground': '#185294',

			// "peekView
			'peekView.border': '#0D3A58',
			'peekViewEditor.background': '#193549',
			'peekViewEditor.matchHighlightBackground': '#19354900',
			'peekViewEditorGutter.background': '#122738',
			'peekViewEditor.matchHighlightBorder': '#ff0000',
			'peekViewResult.background': '#15232d',
			'peekViewResult.fileForeground': '#aaa',
			'peekViewResult.lineForeground': '#fff',
			'peekViewResult.matchHighlightBackground': '#0d3a58',
			'peekViewResult.selectionBackground': '#0d3a58',
			'peekViewResult.selectionForeground': '#fff',
			'peekViewTitle.background': '#15232d',
			'peekViewTitleDescription.foreground': '#aaa',
			'peekViewTitleLabel.foreground': '#ffc600',
			// picker
			'pickerGroup.foreground': o.colors.functions,
			'pickerGroup.border': '#ffe033',
			// progressBar
			'progressBar.background': '#ffc600',
			// scrollbar
			'scrollbar.shadow': '#00000000',
			'scrollbarSlider.activeBackground': '#ff1313cc',
			'scrollbarSlider.background': '#8ef8cc7a', //"#1F466280", //scrollbar block
			'scrollbarSlider.hoverBackground': '#406179cc',
			// sidebar
			// "activityBar.inactiveForeground": "#ff0000",
			'sideBar.border': '#0d3a58', //sidebar border
			'sideBar.foreground': '#aaa',
			'sideBarSectionHeader.foreground': '#aaaaaa',
			'sideBarTitle.foreground': '#bbbbbb',
			'sideBar.background': '#080808',
			'sideBar.dropBackground': o.colors.classname,
			'sideBarSectionHeader.border': '#0D3A58',
			'sideBarSectionHeader.background': '#010135',
			// statusBar
			'statusBar.background': '#15232d',
			'statusBar.border': '#fff0a6',
			'statusBar.debuggingBackground': '#ffc600',
			'statusBar.debuggingForeground': '#15232d',
			'statusBar.foreground': '#aaa',
			'statusBar.noFolderBackground': '#15232d',
			'statusBar.noFolderForeground': '#aaa',
			'statusBarItem.activeBackground': '#0088ff',
			// "statusBarItem.hoverBackground": "#0d3a58",
			'statusBarItem.prominentBackground': '#15232d',
			'statusBarItem.prominentHoverBackground': '#0d3a58',
			// tab
			'tab.activeBackground': '#080808',
			'tab.activeForeground': o.colors.classname,
			'tab.border': '#080808',
			'tab.activeBorder': o.colors.classname,
			'tab.inactiveBackground': '#193549',
			'tab.inactiveForeground': '#aaa',
			'tab.unfocusedActiveForeground': '#aaa',
			'tab.unfocusedInactiveForeground': '#aaa',
			// --- workbench: terminal
			'terminal.ansiBlack': '#000000',
			'terminal.ansiRed': '#ff628c',
			'terminal.ansiGreen': '#3ad900',
			'terminal.ansiYellow': '#ffc600',
			'terminal.ansiBlue': '#0088ff',
			'terminal.ansiMagenta': '#fb94ff',
			'terminal.ansiCyan': '#80fcff',
			'terminal.ansiWhite': '#ffffff',
			'terminal.ansiBrightBlack': '#0050A4',
			'terminal.ansiBrightRed': '#ff628c',
			'terminal.ansiBrightGreen': '#3ad900',
			'terminal.ansiBrightYellow': '#ffc600',
			'terminal.ansiBrightBlue': '#0088ff',
			'terminal.ansiBrightMagenta': '#fb94ff',
			'terminal.ansiBrightCyan': '#80fcff',
			'terminal.ansiBrightWhite': '#193549',
			'terminal.background': '#000000',
			'terminal.foreground': '#ffffff',
			'terminalCursor.background': '#ffc600',
			'terminalCursor.foreground': '#ffc600',
			'terminal.selectionBackground': '#006164a4',
			// textBlockQuote
			'textBlockQuote.background': '#193549',
			'textBlockQuote.border': '#0088ff',
			'textCodeBlock.background': '#193549',
			'textLink.activeForeground': '#0088ff',
			'textLink.foreground': '#0088ff',
			'textPreformat.foreground': '#ffc600',
			'textSeparator.foreground': '#0d3a58',
			'titleBar.activeBackground': '#15232D',
			'titleBar.activeForeground': '#ffffff',
			'titleBar.inactiveBackground': '#193549',
			'titleBar.inactiveForeground': '#ffffff33',
			'walkThrough.embeddedEditorBackground': '#0d3a58',
			'welcomePage.buttonBackground': '#193549',
			'welcomePage.buttonHoverBackground': '#0d3a58',
			'widget.shadow': '#00000026',
		},
		tokenColors: [
			{
				scope: ['keyword.operator.type', 'keyword.operator.logical'],
				settings: {
					foreground: o.colors.exportbool,
					fontStyle: '',
				},
			},
			{
				scope: ['entity.name.type.class'],
				settings: {
					foreground: o.colors.classname,
					fontStyle: 'italic',
				},
			},
			{
				scope: ['variable.parameter'],
				settings: {
					foreground: o.colors.arguments,
					fontStyle: 'italic',
				},
			},
			{
				scope: ['constant.language.boolean'],
				settings: {
					foreground: o.colors.exportbool,
					fontStyle: '',
				},
			},
			{
				scope: [
					'punctuation.definition.template-expression.begin',
					'punctuation.definition.template-expression.end',
				],
				settings: {
					foreground: o.colors.functions,
				},
			},
			{
				scope: ['keyword.control.export'],
				settings: {
					foreground: o.colors.exportbool,
					fontStyle: 'italic',
				},
			},
			{
				scope: ['support.variable.object', 'support.variable.property'],
				settings: {
					foreground: o.colors.types,
					fontStyle: 'italic',
				},
			},
			{
				scope: ['entity.name.tag.yaml'],
				settings: {
					foreground: o.colors.functions,
					fontStyle: 'italic',
				},
			},
			{
				name: 'Comment',
				scope: ['comment', 'punctuation.definition.comment'],
				settings: {
					fontStyle: 'italic',
					foreground: '#6d8996',
				},
			},
			{
				name: 'Variables',
				scope: ['variable', 'string constant.other.placeholder'],
				settings: {
					foreground: '#EEFFFF',
				},
			},
			{
				name: 'Colors',
				scope: ['constant.other.color'],
				settings: {
					foreground: '#ffffff',
				},
			},
			{
				name: 'Invalid',
				scope: ['invalid', 'invalid.illegal'],
				settings: {
					foreground: o.colors.red.a,
				},
			},
			{
				name: 'Keyword, Storage',
				scope: ['keyword', 'storage.type', 'storage.modifier'],
				settings: {
					foreground: o.colors.expression,
					fontStyle: 'italic',
				},
			},
			{
				name: 'Operator, Misc',
				scope: [
					'keyword.control',
					'constant.other.color',
					// "punctuation",
					'meta.tag',
					'punctuation.definition.tag',
					'punctuation.separator.inheritance.php',
					'punctuation.definition.tag.html',
					'punctuation.definition.tag.begin.html',
					'punctuation.definition.tag.end.html',
					'punctuation.section.embedded',
					'keyword.other.template',
					'keyword.other.substitution',
				],
				settings: {
					foreground: o.colors.controlflow,
					fontStyle: 'italic',
				},
			},
			{
				name: 'Tag',
				scope: [
					'entity.name.tag',
					'meta.tag.sgml',
					'markup.deleted.git_gutter',
				],
				settings: {
					foreground: o.colors.objectkeys,
				},
			},
			{
				name: 'Function, Special Method',
				scope: [
					'entity.name.function',
					'meta.function-call',
					'variable.function',
					'support.function',
					'keyword.other.special-method',
				],
				settings: {
					foreground: o.colors.functions,
				},
			},
			{
				name: 'Block Level Variables',
				scope: ['meta.block variable.other'],
				settings: {
					foreground: o.colors.objectkeys,
				},
			},
			{
				name: 'Other Variable, String Link',
				scope: ['support.other.variable', 'string.other.link'],
				settings: {
					foreground: o.colors.objectkeys,
				},
			},
			{
				name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
				scope: [
					'constant.numeric',
					'constant.language',
					'support.constant',
					'constant.character',
					'constant.escape',
					'keyword.other.unit',
					'keyword.other',
				],
				settings: {
					foreground: o.colors.types,
				},
			},
			{
				name: 'String, Symbols, Inherited Class, Markup Heading',
				scope: [
					'string',
					'constant.other.symbol',
					'constant.other.key',
					'entity.other.inherited-class',
					'markup.heading',
					'markup.inserted.git_gutter',
					'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
					'string.quoted.double.json',
				],
				settings: {
					foreground: o.colors.strings,
				},
			},
			{
				name: 'Class, Support',
				scope: [
					'entity.name',
					'support.type',
					'support.class',
					'support.orther.namespace.use.php',
					'meta.use.php',
					'support.other.namespace.php',
					'markup.changed.git_gutter',
					'support.type.sys-types',
				],
				settings: {
					foreground: o.colors.types,
				},
			},
			{
				name: 'Entity Types',
				scope: ['support.type'],
				settings: {
					foreground: '#B2CCD6',
				},
			},
			{
				name: 'CSS Class and Support',
				scope: [
					'source.css support.type.property-name',
					'source.sass support.type.property-name',
					'source.scss support.type.property-name',
					'source.less support.type.property-name',
					'source.stylus support.type.property-name',
					'source.postcss support.type.property-name',
				],
				settings: {
					foreground: '#B2CCD6',
				},
			},
			{
				name: 'Sub-methods',
				scope: [
					'entity.name.module.js',
					'variable.import.parameter.js',
					'variable.other.class.js',
				],
				settings: {
					foreground: '#f8bbd0',
				},
			},
			{
				name: 'Language methods',
				scope: ['variable.language'],
				settings: {
					fontStyle: 'italic',
					foreground: '#f8bbd0',
				},
			},
			{
				name: 'entity.name.method.js',
				scope: ['entity.name.method.js'],
				settings: {
					fontStyle: 'italic',
					foreground: '#74dff5',
				},
			},
			{
				name: 'meta.method.js',
				scope: [
					'meta.class-method.js entity.name.function.js',
					'variable.function.constructor',
				],
				settings: {
					foreground: o.colors.types,
				},
			},
			{
				name: 'Attributes',
				scope: ['entity.other.attribute-name'],
				settings: {
					foreground: o.colors.green.a,
				},
			},
			{
				name: 'HTML Attributes',
				scope: [
					'text.html.basic entity.other.attribute-name.html',
					'text.html.basic entity.other.attribute-name',
				],
				settings: {
					fontStyle: 'italic',
					foreground: '#fff0a6',
				},
			},
			{
				name: 'CSS Classes',
				scope: ['entity.other.attribute-name.class'],
				settings: {
					foreground: '#fff0a6',
				},
			},
			{
				name: "CSS ID's",
				scope: ['source.sass keyword.control'],
				settings: {
					foreground: '#74dff5',
				},
			},
			{
				name: 'Inserted',
				scope: ['markup.inserted'],
				settings: {
					foreground: '#C3E88D',
				},
			},
			{
				name: 'Deleted',
				scope: ['markup.deleted'],
				settings: {
					foreground: '#f8bbd0',
				},
			},
			{
				name: 'Changed',
				scope: ['markup.changed'],
				settings: {
					foreground: o.colors.green.a,
				},
			},
			{
				name: 'Regular Expressions',
				scope: ['string.regexp'],
				settings: {
					foreground: o.colors.regex?.blue || '#89DDFF',
				},
			},
			{
				name: 'Escape Characters',
				scope: ['constant.character.escape'],
				settings: {
					foreground: o.colors.regex?.blue || '#89DDFF',
				},
			},
			{
				name: 'URL',
				scope: ['*url*', '*link*', '*uri*'],
				settings: {
					fontStyle: 'underline',
				},
			},
			{
				name: 'Decorators',
				scope: [
					'tag.decorator.js entity.name.tag.js',
					'tag.decorator.js punctuation.definition.tag.js',
				],
				settings: {
					fontStyle: 'italic',
					foreground: '#74dff5',
				},
			},
			{
				name: 'ES7 Bind Operator',
				scope: [
					'source.js constant.other.object.key.js string.unquoted.label.js',
				],
				settings: {
					fontStyle: 'italic',
					foreground: '#f8bbd0',
				},
			},
			{
				name: 'JSON Key - Level 0',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json',
				],
				settings: {
					foreground: '#f48fb1',
				},
			},
			{
				name: 'JSON Key - Level 0',
				scope: [
					'source.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.classname,
				},
			},
			{
				name: 'JSON Key - Level 1',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.functions,
				},
			},
			{
				name: 'JSON Key - Level 2',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: '#daf381',
				},
			},
			{
				name: 'JSON Key - Level 3',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: '#97efff',
				},
			},
			{
				name: 'JSON Key - Level 4',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: '#C17E70',
				},
			},
			{
				name: 'JSON Key - Level 5',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: '#74dff5',
				},
			},
			{
				name: 'JSON Key - Level 6',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.objectkeys,
				},
			},
			{
				name: 'JSON Key - Level 7',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.green.a,
				},
			},
			{
				name: 'JSON Key - Level 8',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: '#C3E88D',
				},
			},
			{
				name: 'Markdown - Plain',
				scope: [
					'text.html.markdown',
					'punctuation.definition.list_item.markdown',
				],
				settings: {
					foreground: '#EEFFFF',
				},
			},
			{
				name: 'Markdown - Markup Raw Inline',
				scope: ['text.html.markdown markup.inline.raw.markdown'],
				settings: {
					foreground: o.colors.green.a,
				},
			},
			{
				name: 'Markdown - Markup Raw Inline Punctuation',
				scope: [
					'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown',
				],
				settings: {
					foreground: '#65737E',
				},
			},
			{
				name: 'Markdown - Heading',
				scope: [
					'markdown.heading',
					'markup.heading | markup.heading entity.name',
					'markup.heading.markdown punctuation.definition.heading.markdown',
				],
				settings: {
					foreground: '#C3E88D',
				},
			},
			{
				name: 'Markup - Italic',
				scope: ['markup.italic'],
				settings: {
					fontStyle: 'italic',
					foreground: o.colors.objectkeys,
				},
			},
			{
				name: 'Markup - Bold',
				scope: ['markup.bold', 'markup.bold string'],
				settings: {
					fontStyle: 'bold',
					foreground: o.colors.objectkeys,
				},
			},
			{
				name: 'Markup - Bold-Italic',
				scope: [
					'markup.bold markup.italic',
					'markup.italic markup.bold',
					'markup.quote markup.bold',
					'markup.bold markup.italic string',
					'markup.italic markup.bold string',
					'markup.quote markup.bold string',
				],
				settings: {
					fontStyle: 'bold',
					foreground: o.colors.objectkeys,
				},
			},
			{
				name: 'Markup - Underline',
				scope: ['markup.underline'],
				settings: {
					fontStyle: 'underline',
					foreground: o.colors.types,
				},
			},
			{
				name: 'Markdown - Blockquote',
				scope: ['markup.quote punctuation.definition.blockquote.markdown'],
				settings: {
					foreground: '#65737E',
				},
			},
			{
				name: 'Markup - Quote',
				scope: ['markup.quote'],
				settings: {
					fontStyle: 'italic',
				},
			},
			{
				name: 'Markdown - Link',
				scope: ['string.other.link.title.markdown'],
				settings: {
					foreground: '#74dff5',
				},
			},
			{
				name: 'Markdown - Link Description',
				scope: ['string.other.link.description.title.markdown'],
				settings: {
					foreground: o.colors.green.a,
				},
			},
			{
				name: 'Markdown - Link Anchor',
				scope: ['constant.other.reference.link.markdown'],
				settings: {
					foreground: '#fff0a6',
				},
			},
			{
				name: 'Markup - Raw Block',
				scope: ['markup.raw.block'],
				settings: {
					foreground: o.colors.green.a,
				},
			},
			{
				name: 'Markdown - Raw Block Fenced',
				scope: ['markup.raw.block.fenced.markdown'],
				settings: {
					foreground: '#00000050',
				},
			},
			{
				name: 'Markdown - Fenced Bode Block',
				scope: ['punctuation.definition.fenced.markdown'],
				settings: {
					foreground: '#00000050',
				},
			},
			{
				name: 'Markdown - Fenced Bode Block Variable',
				scope: [
					'markup.raw.block.fenced.markdown',
					'variable.language.fenced.markdown',
					'punctuation.section.class.end',
				],
				settings: {
					foreground: '#EEFFFF',
				},
			},
			{
				name: 'Markdown - Fenced Language',
				scope: ['variable.language.fenced.markdown'],
				settings: {
					foreground: '#65737E',
				},
			},
			{
				name: 'Markdown - Separator',
				scope: ['meta.separator'],
				settings: {
					fontStyle: 'bold',
					foreground: '#65737E',
				},
			},
			{
				name: 'Markup - Table',
				scope: ['markup.table'],
				settings: {
					foreground: '#EEFFFF',
				},
			},
			// go

			{
				scope: ['constant.other.placeholder.go'],
				settings: {
					foreground: o.colors.types,
				},
			},
			// python

			{
				scope: ['meta.function-call.arguments.python'],
				settings: {
					foreground: o.colors.types,
				},
			},

			{
				name: 'Python self',
				scope: ['variable.language.special.self.python'],
				settings: {
					fontStyle: 'italic',
					foreground: o.colors.python?.self || '#ffccbc',
				},
			},
			{
				scope: ['support.type.python'],
				settings: {
					foreground: o.colors.python?.type || '#a4eaf8',
				},
			},
			{
				name: 'Python docstring',
				scope: ['string.quoted.docstring.multi.python'],
				settings: {
					fontStyle: 'italic',
					foreground: '#6d8996',
				},
			},

			// HTML
			{
				scope: ['entity.name.tag.other.html'],
				settings: {
					foreground: '#ffccbc',
				},
			},

			// All
			{
				scope: ['support.function.builtin'],
				settings: {
					foreground: '#ccff90',
				},
			},
			{
				scope: ['meta.function-call.generic'],
				settings: {
					foreground: '#fffde7',
				},
			},

			// regex
			{
				scope: ['constant.character.set.regexp'],
				settings: {
					foreground: o.colors.types,
				},
			},
			{
				scope: ['constant.other.set.regexp'],
				settings: {
					foreground: o.colors.regex?.blue || '#6ff9ff',
				},
			},
			{
				scope: ['keyword.operator.quantifier.regexp'],
				settings: {
					foreground: o.colors.regex?.yellow || '#ffee58',
					fontStyle: '',
				},
			},
			{
				scope: ['constant.other.character-class.regexp'],
				settings: {
					foreground: o.colors.regex?.green || '#c6ff00',
					fontStyle: '',
				},
			},
			{
				scope: [
					'punctuation.parenthesis.begin.regexp',
					'punctuation.parenthesis.end.regexp',
					'punctuation.parenthesis.non-capturing.begin.regexp',
					'punctuation.parenthesis.non-capturing.end.regexp',
					'keyword.operator.disjunction.regexp',
				],
				settings: {
					foreground: o.colors.regex?.orange || '#ff7043',
					fontStyle: '',
				},
			},
			{
				scope: ['support.other.escape.special.regexp'],
				settings: {
					foreground: o.colors.regex?.green || '#b2ff59',
					fontStyle: '',
				},
			},
			{
				scope: [
					'keyword.operator.negation.regexp',
					'keyword.operator.disjunction.regexp',
					'keyword.control.anchor.regexp',
				],
				settings: {
					foreground: o.colors.regex?.orange || '#ff6e40',
					fontStyle: '',
				},
			},
			{
				scope: [
					'meta.assertion.negative-look-ahead.regexp',
					'meta.assertion.negative-look-behind.regexp',
					'meta.assertion.look-ahead.regexp',
					'meta.assertion.look-behind.regexp',
				],
				settings: {
					foreground: o.colors.regex?.green || '#ccff90',
				},
			},
		],
	};
};
