import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import QrCodePanel, { QRCODE_ADDON_TITLE, QRCODE_ADDON_ID, QRCODE_PANEL_ID } from './qrcodePanel';

addons.register(QRCODE_ADDON_ID, (api) => {
  addons.add(QRCODE_PANEL_ID, {
    type: types.PANEL,
    title: QRCODE_ADDON_TITLE,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key} >
        <QrCodePanel api={api} />
      </AddonPanel>
    )
  })
})