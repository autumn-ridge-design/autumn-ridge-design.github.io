/*
 * FCKeditor - The text editor for internet
 * Copyright (C) 2003-2006 Frederico Caldeira Knabben
 * 
 * Licensed under the terms of the GNU Lesser General Public License:
 *    http://www.opensource.org/licenses/lgpl-license.php
 * 
 * For further information visit:
 *    http://www.fckeditor.net/
 * 
 * "Support Open Source software. What about a donation today?"
 * 
 * File Name: fckplugin.js
 *    Insert formatted trademark
 * 
 * Version 0.1, 01-27-2010
 * 
 * File Authors:
 *    Anna Kalata - test release
 *    From REGE's Non-breaking space plugin
 *    http://sourceforge.net/tracker/?func=detail&aid=1469494&group_id=75348&atid=737639
 */

var My_FCKTradeCommand = function()
{

}

My_FCKTradeCommand.prototype.Execute = function()
{
    FCK.InsertHtml('&trade;');
}

My_FCKTradeCommand.prototype.GetState = function()
{
    return FCK_TRISTATE_OFF; 
}

// Tradeister the related command.
FCKCommands.RegisterCommand('trade', new My_FCKTradeCommand());

// Create the "trade" toolbar button.
var tradeItem = new FCKToolbarButton("trade", FCKLang.TradeButton);
tradeItem.IconPath = FCKConfig.PluginsPath + 'trade/trade.gif';

// 'trade' is the name used in the Toolbar config.
FCKToolbarItems.RegisterItem('trade', tradeItem);