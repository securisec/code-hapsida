import { Options } from './types';

export const template = (o: Options) => {
	return {
		name: o.name,
		type: 'dark',
		colors: {
			'editor.background': o.colors.background,
			'editor.foreground': o.colors.foreground,
			'quickInput.background': o.colors.background,
			'quickInput.foreground': o.colors.check,

			'editorOverviewRuler.findMatchForeground': o.colors.check,
			// panel
			'panel.background': o.colors.background,
			'panel.border': o.colors.primary,
			'panelTitle.activeBorder': o.colors.primary,
			'panelTitle.activeForeground': o.colors.primary,
			'panelTitle.inactiveForeground': o.colors.background,

			'editor.findMatchBackground': o.colors.green,
			'editor.findMatchBorder': o.colors.primary,
			'editor.findMatchHighlightBackground': o.colors.background + '2f',
			'editor.findMatchHighlightBorder': o.colors.secondary,
			'editor.selectionBackground': o.colors.primary + '1f',
			// "editorBracketMatch.border": "#29e2e2",
			'editor.selectionHighlightBackground': o.colors.accent + '1f',
			'editorIndentGuide.activeBackground': o.colors.check,
			// This section is for testing cobalt
			//
			// https://github.com/wesbos/cobalt2-vscode/blob/master/theme/cobalt2.json#L125-L135
			'input.background': o.colors.background, //search bar color
			'input.border': o.colors.accent, //search bar border
			'input.foreground': o.colors.primary,
			'input.placeholderForeground': o.colors.foreground,
			'inputOption.activeBorder': o.colors.red,
			'inputValidation.errorBackground': o.colors.red + '2f',
			'inputValidation.errorBorder': o.colors.red,
			'inputValidation.infoBackground': o.colors.check,
			'inputValidation.infoBorder': o.colors.accent,
			'inputValidation.warningBackground': o.colors.yellow + '2f',
			'inputValidation.warningBorder': o.colors.yellow,
			'selection.background': o.colors.secondary + '2f',
			// Git status colors in File Explorer
			// https://github.com/wesbos/cobalt2-vscode/blob/master/theme/cobalt2.json#L248-L253
			'gitDecoration.modifiedResourceForeground': o.colors.primary,
			'gitDecoration.deletedResourceForeground': o.colors.other.orange,
			'gitDecoration.untrackedResourceForeground': o.colors.red,
			'gitDecoration.ignoredResourceForeground': o.colors.other.orange,
			'gitDecoration.conflictingResourceForeground': o.colors.other.orange,
			// activityBar
			// https://github.com/wesbos/cobalt2-vscode/blob/master/theme/cobalt2.json#L6-L12
			'activityBar.border': o.colors.primary, //sidebar border
			'activityBar.dropBackground': o.colors.accent,
			'activityBar.foreground': o.colors.foreground,
			'activityBarBadge.foreground': '#000',
			'activityBarBadge.background': o.colors.primary,
			'activityBar.inactiveForeground': o.colors.check,
			'activityBar.background': o.colors.background,
			// badge
			// https://github.com/wesbos/cobalt2-vscode/blob/master/theme/cobalt2.json#L13-L15
			'badge.background': o.colors.secondary,
			'badge.foreground': o.colors.primary,
			// button
			'button.background': o.colors.check,
			'button.foreground': o.colors.primary,
			'button.hoverBackground': o.colors.check,
			// contrast
			// "contrastActiveBorder": null,
			'contrastBorder': o.colors.check + '00',
			// debug
			'debugExceptionWidget.background': o.colors.check,
			'debugExceptionWidget.border': o.colors.foreground,
			'debugToolBar.background': o.colors.check,
			// description
			descriptionForeground: o.colors.foreground,
			// diff
			'diffEditor.insertedTextBackground': o.colors.green + '33',
			'diffEditor.insertedTextBorder': o.colors.green + '55',
			'diffEditor.removedTextBackground': o.colors.red + '33',
			'diffEditor.removedTextBorder': o.colors.red + '55',
			// dropdown
			'dropdown.background': o.colors.check, // output window
			'dropdown.border': o.colors.check,
			'dropdown.foreground': o.colors.foreground,
			'editor.inactiveSelectionBackground': o.colors.check,
			// current line styles
			'editor.lineHighlightBackground': o.colors.background + 'ff',
			'editor.lineHighlightBorder': o.colors.blue,
			// and this one is the rest of them
			'editor.wordHighlightBackground': o.colors.check + '33',
			'editorBracketMatch.background': o.colors.accent,
			'editorBracketMatch.border': o.colors.check = '80',
			'editorCodeLens.foreground': o.colors.foreground,
			'editorCursor.foreground': o.colors.check,
			// "editorError.border": "#0d3a58",
			// gutter
			'editorGutter.background': o.colors.background,
			'editorGutter.addedBackground': o.colors.green + '8a',
			'editorGutter.deletedBackground': o.colors.red,
			'editorGutter.modifiedBackground': o.colors.yellow + 'd2',
			// editorGroup
			'editorGroup.border': o.colors.check,
			'editorGroup.dropBackground': o.colors.check + '99',
			// editorHoverWidget
			'editorHoverWidget.background': o.colors.check,
			'editorHoverWidget.border': o.colors.accent,
			'editorIndentGuide.background': o.colors.check,
			'editorLineNumber.foreground': o.colors.foreground,
			'editorLineNumber.activeForeground': o.colors.check,
			'editorLink.activeForeground': o.colors.foreground,
			// editorMarkerNavigation
			'editorMarkerNavigation.background': o.colors.check + '33',
			'editorMarkerNavigationError.background': o.colors.check,
			'editorMarkerNavigationWarning.background': o.colors.check,
			// ruler
			'editorOverviewRuler.border': o.colors.accent,
			'editorOverviewRuler.commonContentForeground': o.colors.check + '55',
			'editorOverviewRuler.currentContentForeground': o.colors.check + '55',
			'editorOverviewRuler.incomingContentForeground': o.colors.check + '55',
			'editorRuler.foreground': o.colors.check,
			'editorSuggestWidget.background': o.colors.check, //"#15232d", //autocomplete intellisense backgroun
			'editorSuggestWidget.border': o.colors.check,
			'editorSuggestWidget.foreground': o.colors.foreground,
			'editorSuggestWidget.highlightForeground': o.colors.check,
			'editorSuggestWidget.selectedBackground': o.colors.check,
			// editorWarning
			'editorWarning.border': o.colors.check + '00',
			'editorWarning.foreground': o.colors.check,
			'editorWhitespace.foreground': o.colors.check + '1a',
			'editorWidget.background': o.colors.check,
			'editorWidget.border': o.colors.accent,
			errorForeground: o.colors.check,
			// error squiggles
			'editorError.foreground': o.colors.check,
			'editorError.border': o.colors.red,
			// extensionButton
			'extensionButton.prominentBackground': o.colors.background,
			'extensionButton.prominentForeground': o.colors.foreground,
			'extensionButton.prominentHoverBackground': o.colors.primary,
			focusBorder: o.colors.accent,
			foreground: o.colors.foreground,
			'list.activeSelectionBackground': o.colors.primary,
			'list.activeSelectionForeground': o.colors.background,
			'list.inactiveSelectionBackground': o.colors.primary + '5f',
			'list.inactiveSelectionForeground': o.colors.background,
			'list.dropBackground': o.colors.background,
			'list.focusBackground': o.colors.accent,
			'list.focusForeground': o.colors.primary, //command pallette active selection text
			'list.highlightForeground': o.colors.primary,
			'list.hoverBackground': o.colors.primary + '1f',
			'list.hoverForeground': o.colors.background,
			// merge
			'merge.border': o.colors.primary + '00',
			'merge.commonContentBackground': o.colors.check,
			'merge.commonHeaderBackground': o.colors.check,
			'merge.currentContentBackground': o.colors.check,
			'merge.currentHeaderBackground': o.colors.check,
			'merge.incomingContentBackground': o.colors.check,
			'merge.incomingHeaderBackground': o.colors.check,

			// "peekView
			'peekView.border': o.colors.accent,
			'peekViewEditor.background': o.colors.check,
			'peekViewEditor.matchHighlightBackground': o.colors.check + '00',
			'peekViewEditorGutter.background': o.colors.check,
			'peekViewEditor.matchHighlightBorder': o.colors.check,
			'peekViewResult.background': o.colors.check,
			'peekViewResult.fileForeground': o.colors.foreground,
			'peekViewResult.lineForeground': o.colors.foreground,
			'peekViewResult.matchHighlightBackground': o.colors.accent,
			'peekViewResult.selectionBackground': o.colors.accent,
			'peekViewResult.selectionForeground': o.colors.foreground,
			'peekViewTitle.background': o.colors.check,
			'peekViewTitleDescription.foreground': o.colors.foreground,
			'peekViewTitleLabel.foreground': o.colors.check,
			// picker
			'pickerGroup.foreground': o.colors.blue,
			'pickerGroup.border': o.colors.check,
			// progressBar
			'progressBar.background': o.colors.check,
			// scrollbar
			'scrollbar.shadow': '#00000000',
			'scrollbarSlider.activeBackground': o.colors.green + 'cc',
			'scrollbarSlider.background': o.colors.primary + '7a', //"#1F466280", //scrollbar block
			'scrollbarSlider.hoverBackground': o.colors.blue + 'cc',
			// sidebar
			// "activityBar.inactiveForeground": "#ff0000",
			'sideBar.border': o.colors.primary, //sidebar border
			'sideBar.background': o.colors.background,
			'sideBar.foreground': o.colors.primary,
			'sideBarTitle.foreground': o.colors.primary,
			'sidebarTitle.background': o.colors.background,
			'sideBar.dropBackground': o.colors.check,
			'sideBarSectionHeader.border': o.colors.primary,
			'sideBarSectionHeader.foreground': o.colors.background, //?
			'sideBarSectionHeader.background': o.colors.primary, //?
			// statusBar
			'statusBar.foreground': o.colors.background, //?
			'statusBar.background': o.colors.primary, //?
			'statusBar.border': o.colors.secondary,
			'statusBar.debuggingBackground': o.colors.check,
			'statusBar.debuggingForeground': o.colors.check,
			'statusBar.noFolderBackground': o.colors.check,
			'statusBar.noFolderForeground': o.colors.foreground,
			'statusBarItem.activeBackground': o.colors.check,
			// "statusBarItem.hoverBackground": "#0d3a58",
			'statusBarItem.prominentBackground': o.colors.check,
			'statusBarItem.prominentHoverBackground': o.colors.accent,
			// tab
			'tab.activeBackground': o.colors.background,
			'tab.activeForeground': o.colors.primary,
			'tab.border': o.colors.background,
			'tab.activeBorder': o.colors.red,
			'tab.inactiveBackground': o.colors.background,
			'tab.inactiveForeground': o.colors.foreground,
			'tab.unfocusedActiveForeground': o.colors.foreground,
			'tab.unfocusedInactiveForeground': o.colors.foreground,
			// --- workbench: terminal
			'terminal.ansiBlack': o.colors.check,
			'terminal.ansiRed': o.colors.check,
			'terminal.ansiGreen': o.colors.check,
			'terminal.ansiYellow': o.colors.check,
			'terminal.ansiBlue': o.colors.check,
			'terminal.ansiMagenta': o.colors.check,
			'terminal.ansiCyan': o.colors.check,
			'terminal.ansiWhite': o.colors.check,
			'terminal.ansiBrightBlack': o.colors.check,
			'terminal.ansiBrightRed': o.colors.check,
			'terminal.ansiBrightGreen': o.colors.check,
			'terminal.ansiBrightYellow': o.colors.check,
			'terminal.ansiBrightBlue': o.colors.check,
			'terminal.ansiBrightMagenta': o.colors.check,
			'terminal.ansiBrightCyan': o.colors.check,
			'terminal.ansiBrightWhite': o.colors.check,
			'terminal.background': o.colors.check,
			'terminal.foreground': o.colors.check,
			'terminalCursor.background': o.colors.check,
			'terminalCursor.foreground': o.colors.check,
			'terminal.selectionBackground': o.colors.foreground + 'a4',
			// textBlockQuote
			'textBlockQuote.background': o.colors.check,
			'textBlockQuote.border': o.colors.check,
			'textCodeBlock.background': o.colors.check,
			'textLink.activeForeground': o.colors.check,
			'textLink.foreground': o.colors.check,
			'textPreformat.foreground': o.colors.check,
			'textSeparator.foreground': o.colors.accent,
			'titleBar.activeBackground': o.colors.check,
			'titleBar.activeForeground': o.colors.check,
			'titleBar.inactiveBackground': o.colors.check,
			'titleBar.inactiveForeground': o.colors.foreground + '33',
			'walkThrough.embeddedEditorBackground': o.colors.accent,
			'welcomePage.buttonBackground': o.colors.check,
			'welcomePage.buttonHoverBackground': o.colors.accent,
			'widget.shadow': '#00000026',
		},
		tokenColors: [
			{
				scope: ['keyword.operator.type', 'keyword.operator.logical'],
				settings: {
					foreground: o.colors.red,
					fontStyle: '',
				},
			},
			{
				scope: ['keyword.control.conditional'],
				settings: {
					foreground: o.colors.other.orange,
					fontStyle: '',
				},
			},
			{
				scope: ['entity.name.type.class'],
				settings: {
					foreground: o.colors.red,
					fontStyle: 'italic',
				},
			},
			{
				scope: ['variable.parameter'],
				settings: {
					foreground: o.colors.green,
					fontStyle: 'italic',
				},
			},
			{
				scope: ['constant.language.boolean'],
				settings: {
					foreground: o.colors.red,
					fontStyle: '',
				},
			},
			{
				scope: [
					'punctuation.definition.template-expression.begin',
					'punctuation.definition.template-expression.end',
				],
				settings: {
					foreground: o.colors.blue,
				},
			},
			{
				scope: ['keyword.control.export'],
				settings: {
					foreground: o.colors.red,
					fontStyle: 'italic',
				},
			},
			{
				scope: ['support.variable'],
				settings: {
					foreground: o.colors.cyan,
					fontStyle: 'italic',
				},
			},
			{
				scope: ['entity.name.tag.yaml'],
				settings: {
					foreground: o.colors.blue,
					fontStyle: 'italic',
				},
			},
			{
				name: 'Comment',
				scope: ['comment', 'punctuation.definition.comment'],
				settings: {
					fontStyle: 'italic',
					foreground: o.colors.check,
				},
			},
			{
				name: 'Variables',
				scope: [
					'variable.other.assignment',
					'variable',
					'string constant.other.placeholder',
				],
				settings: {
					foreground: o.colors.cyan,
				},
			},
			{
				name: 'Colors',
				scope: ['constant.other.color'],
				settings: {
					foreground: o.colors.check,
				},
			},
			{
				name: 'Invalid',
				scope: ['invalid', 'invalid.illegal'],
				settings: {
					foreground: o.colors.red,
				},
			},
			{
				name: 'Keyword, Storage',
				scope: ['storage.type', 'storage.modifier', 'keyword'],
				settings: {
					foreground: o.colors.cyan,
					fontStyle: 'italic',
				},
			},
			{
				scope: ['keyword.operator'],
				settings: {
					foreground: o.colors.other.orange,
					fontStyle: '',
				},
			},
			{
				scope: ['keyword.control'],
				settings: {
					foreground: o.colors.other.orange,
					fontStyle: 'bold',
				},
			},
			{
				name: 'Operator, Misc',
				scope: [
					'constant.other.color',
					// "punctuation",
					'meta.tag',
					'punctuation.definition.tag',
					'punctuation.separator.inheritance.php',
					'punctuation.separator',
					'punctuation.definition.tag.html',
					'punctuation.definition.tag.begin.html',
					'punctuation.definition.tag.end.html',
					'punctuation.section.embedded',
					'keyword.other.template',
					'keyword.other.substitution',
				],
				settings: {
					foreground: o.colors.other.orange,
					// fontStyle: 'italic',
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
					foreground: o.colors.green,
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
					foreground: o.colors.blue,
				},
			},
			{
				name: 'Block Level Variables',
				scope: ['meta.block', 'variable.other'],
				settings: {
					foreground: o.colors.foreground,
				},
			},
			{
				name: 'Other Variable, String Link',
				scope: ['support.other.variable', 'string.other.link'],
				settings: {
					foreground: o.colors.green,
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
					foreground: o.colors.foreground,
				},
			},
			{
				name: 'String, Symbols, Inherited Class, Markup Heading',
				scope: [
					'string.quoted',
					'constant.other.symbol',
					'constant.other.key',
					'entity.other.inherited-class',
					'markup.heading',
					'markup.inserted.git_gutter',
					'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
					'string.quoted.double.json',
				],
				settings: {
					foreground: o.colors.primary,
				},
			},
			{
				scope: ['support.class.builtin', 'entity.name.type'],
				settings: {
					foreground: o.colors.blue,
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
					foreground: o.colors.yellow,
				},
			},
			{
				name: 'Entity Types',
				scope: ['support.type'],
				settings: {
					foreground: o.colors.check,
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
					foreground: o.colors.check,
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
					foreground: o.colors.check,
				},
			},
			{
				name: 'Language methods',
				scope: ['variable.language'],
				settings: {
					fontStyle: 'italic',
					foreground: o.colors.check,
				},
			},
			{
				name: 'entity.name.method.js',
				scope: ['entity.name.method.js'],
				settings: {
					fontStyle: 'italic',
					foreground: o.colors.check,
				},
			},
			{
				name: 'meta.method.js',
				scope: [
					'meta.class-method.js entity.name.function.js',
					'variable.function.constructor',
				],
				settings: {
					foreground: o.colors.yellow,
				},
			},
			{
				name: 'HTML Attributes',
				scope: ['entity.other.attribute-name'],
				settings: {
					fontStyle: 'italic',
					foreground: o.colors.blue,
				},
			},
			{
				name: 'CSS Classes',
				scope: ['entity.other.attribute-name.class'],
				settings: {
					foreground: o.colors.check,
				},
			},
			{
				name: "CSS ID's",
				scope: ['source.sass keyword.control'],
				settings: {
					foreground: o.colors.check,
				},
			},
			{
				name: 'Inserted',
				scope: ['markup.inserted'],
				settings: {
					foreground: o.colors.check,
				},
			},
			{
				name: 'Deleted',
				scope: ['markup.deleted'],
				settings: {
					foreground: o.colors.check,
				},
			},
			{
				name: 'Changed',
				scope: ['markup.changed'],
				settings: {
					foreground: o.colors.green,
				},
			},
			{
				name: 'Regular Expressions',
				scope: ['string.regexp'],
				settings: {
					foreground: o.colors.blue || o.colors.check,
				},
			},
			{
				name: 'Escape Characters',
				scope: ['constant.character.escape'],
				settings: {
					foreground: o.colors.blue || o.colors.check,
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
					foreground: o.colors.check,
				},
			},
			{
				name: 'ES7 Bind Operator',
				scope: [
					'source.js constant.other.object.key.js string.unquoted.label.js',
				],
				settings: {
					fontStyle: 'italic',
					foreground: o.colors.check,
				},
			},
			{
				name: 'JSON Key - Level 0',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json',
				],
				settings: {
					foreground: o.colors.check,
				},
			},
			{
				name: 'JSON Key - Level 0',
				scope: [
					'source.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.red,
				},
			},
			{
				name: 'JSON Key - Level 1',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.blue,
				},
			},
			{
				name: 'JSON Key - Level 2',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.check,
				},
			},
			{
				name: 'JSON Key - Level 3',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.check,
				},
			},
			{
				name: 'JSON Key - Level 4',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.check,
				},
			},
			{
				name: 'JSON Key - Level 5',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.check,
				},
			},
			{
				name: 'JSON Key - Level 6',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.green,
				},
			},
			{
				name: 'JSON Key - Level 7',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.green,
				},
			},
			{
				name: 'JSON Key - Level 8',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: o.colors.check,
				},
			},
			// {
			// 	name: 'Markdown - Plain',
			// 	scope: [
			// 		'text.html.markdown',
			// 		'punctuation.definition.list_item.markdown',
			// 	],
			// 	settings: {
			// 		foreground: o.colors.check,
			// 	},
			// },
			// {
			// 	name: 'Markdown - Markup Raw Inline',
			// 	scope: ['text.html.markdown markup.inline.raw.markdown'],
			// 	settings: {
			// 		foreground: o.colors.green,
			// 	},
			// },
			// {
			// 	name: 'Markdown - Markup Raw Inline Punctuation',
			// 	scope: [
			// 		'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown',
			// 	],
			// 	settings: {
			// 		foreground: o.colors.check,
			// 	},
			// },
			// {
			// 	name: 'Markdown - Heading',
			// 	scope: [
			// 		'markdown.heading',
			// 		'markup.heading | markup.heading entity.name',
			// 		'markup.heading.markdown punctuation.definition.heading.markdown',
			// 	],
			// 	settings: {
			// 		foreground: o.colors.check,
			// 	},
			// },
			// {
			// 	name: 'Markup - Italic',
			// 	scope: ['markup.italic'],
			// 	settings: {
			// 		fontStyle: 'italic',
			// 		foreground: o.colors.green,
			// 	},
			// },
			// {
			// 	name: 'Markup - Bold',
			// 	scope: ['markup.bold', 'markup.bold string'],
			// 	settings: {
			// 		fontStyle: 'bold',
			// 		foreground: o.colors.green,
			// 	},
			// },
			// {
			// 	name: 'Markup - Bold-Italic',
			// 	scope: [
			// 		'markup.bold markup.italic',
			// 		'markup.italic markup.bold',
			// 		'markup.quote markup.bold',
			// 		'markup.bold markup.italic string',
			// 		'markup.italic markup.bold string',
			// 		'markup.quote markup.bold string',
			// 	],
			// 	settings: {
			// 		fontStyle: 'bold',
			// 		foreground: o.colors.green,
			// 	},
			// },
			// {
			// 	name: 'Markup - Underline',
			// 	scope: ['markup.underline'],
			// 	settings: {
			// 		fontStyle: 'underline',
			// 		foreground: o.colors.yellow,
			// 	},
			// },
			// {
			// 	name: 'Markdown - Blockquote',
			// 	scope: ['markup.quote punctuation.definition.blockquote.markdown'],
			// 	settings: {
			// 		foreground: o.colors.primary,
			// 	},
			// },
			// {
			// 	name: 'Markup - Quote',
			// 	scope: ['markup.quote'],
			// 	settings: {
			// 		fontStyle: 'italic',
			// 	},
			// },
			// {
			// 	name: 'Markdown - Link',
			// 	scope: ['string.other.link.title.markdown'],
			// 	settings: {
			// 		foreground: o.colors.check,
			// 	},
			// },
			// {
			// 	name: 'Markdown - Link Description',
			// 	scope: ['string.other.link.description.title.markdown'],
			// 	settings: {
			// 		foreground: o.colors.green,
			// 	},
			// },
			// {
			// 	name: 'Markdown - Link Anchor',
			// 	scope: ['constant.other.reference.link.markdown'],
			// 	settings: {
			// 		foreground: o.colors.check,
			// 	},
			// },
			// {
			// 	name: 'Markup - Raw Block',
			// 	scope: ['markup.raw.block'],
			// 	settings: {
			// 		foreground: o.colors.green,
			// 	},
			// },
			// {
			// 	name: 'Markdown - Raw Block Fenced',
			// 	scope: ['markup.raw.block.fenced.markdown'],
			// 	settings: {
			// 		foreground: '#00000050',
			// 	},
			// },
			// {
			// 	name: 'Markdown - Fenced Bode Block',
			// 	scope: ['punctuation.definition.fenced.markdown'],
			// 	settings: {
			// 		foreground: '#00000050',
			// 	},
			// },
			// {
			// 	name: 'Markdown - Fenced Bode Block Variable',
			// 	scope: [
			// 		'markup.raw.block.fenced.markdown',
			// 		'variable.language.fenced.markdown',
			// 		'punctuation.section.class.end',
			// 	],
			// 	settings: {
			// 		foreground: o.colors.check,
			// 	},
			// },
			// {
			// 	name: 'Markdown - Fenced Language',
			// 	scope: ['variable.language.fenced.markdown'],
			// 	settings: {
			// 		foreground: o.colors.check,
			// 	},
			// },
			// {
			// 	name: 'Markdown - Separator',
			// 	scope: ['meta.separator'],
			// 	settings: {
			// 		fontStyle: 'bold',
			// 		foreground: o.colors.check,
			// 	},
			// },
			// {
			// 	name: 'Markup - Table',
			// 	scope: ['markup.table'],
			// 	settings: {
			// 		foreground: o.colors.check,
			// 	},
			// },
			// go

			{
				scope: ['constant.other.placeholder.go'],
				settings: {
					foreground: o.colors.yellow,
				},
			},
			// python

			{
				scope: ['meta.item-access.python'],
				settings: {
					foreground: o.colors.yellow,
				},
			},

			{
				scope: ['meta.function-call.green.python'],
				settings: {
					foreground: o.colors.yellow,
				},
			},

			{
				name: 'Python self',
				scope: ['variable.language.special.self.python'],
				settings: {
					fontStyle: 'italic',
					foreground: o.colors.accent || o.colors.check,
				},
			},
			{
				scope: ['support.type.python'],
				settings: {
					foreground: o.colors.accent || o.colors.check,
				},
			},
			{
				name: 'Python docstring',
				scope: ['string.quoted.docstring.multi.python'],
				settings: {
					fontStyle: 'italic',
					foreground: o.colors.check,
				},
			},

			// HTML
			{
				scope: ['entity.name.tag.other.html'],
				settings: {
					foreground: o.colors.check,
				},
			},

			// All
			{
				scope: ['support.function.builtin'],
				settings: {
					foreground: o.colors.green,
				},
			},
			{
				scope: ['meta.function-call.generic'],
				settings: {
					foreground: o.colors.check,
				},
			},

			// regex
			{
				scope: ['constant.character.set.regexp'],
				settings: {
					foreground: o.colors.yellow,
				},
			},
			{
				scope: ['constant.other.set.regexp'],
				settings: {
					foreground: o.colors.blue || o.colors.check,
				},
			},
			{
				scope: ['keyword.operator.quantifier.regexp'],
				settings: {
					foreground: o.colors.yellow || o.colors.check,
					fontStyle: '',
				},
			},
			{
				scope: ['constant.other.character-class.regexp'],
				settings: {
					foreground: o.colors.green || o.colors.check,
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
					foreground: o.colors.other.orange || o.colors.check,
					fontStyle: '',
				},
			},
			{
				scope: ['support.other.escape.special.regexp'],
				settings: {
					foreground: o.colors.green || o.colors.check,
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
					foreground: o.colors.other.orange || o.colors.check,
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
					foreground: o.colors.green || o.colors.green,
				},
			},
		],
	};
};
