/*
 * FCKeditor - The text editor for internet
 * Copyright (C) 2003-2006 Frederico Caldeira Knabben
 *
 * Non-breaking Space Plugin
 * Copyright (c) 2006 Bartosz Rogozinski [REGE]
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
 *    Insert formatted registration mark
 * 
 * Version 0.1, 01-27-2010
 * 
 * File Authors:
 *    Anna Kalata - test release
 *    From REGE's Non-breaking space plugin
 *    http://sourceforge.net/tracker/?func=detail&aid=1469494&group_id=75348&atid=737639
 */

var My_FCKRegCommand = function()
{

}

My_FCKRegCommand.prototype.Execute = function()
{
    FCK.InsertHtml('<span class="reg">&reg;</span>');
}

My_FCKRegCommand.prototype.GetState = function()
{
    return FCK_TRISTATE_OFF; 
}

// Register the related command.
FCKCommands.RegisterCommand('reg', new My_FCKRegCommand());

// Create the "reg" toolbar button.
var regItem = new FCKToolbarButton("reg", FCKLang.RegButton);
regItem.IconPath = FCKConfig.PluginsPath + 'reg/reg.gif';

// 'reg' is the name used in the Toolbar config.
FCKToolbarItems.RegisterItem('reg', regItem);