/**
 * Created by wizard on 16/3/31.
 */

export default {
  id: 'info_layer',
  component: 'Window',
  header: { id: 'ttl', skin: 'blueheader', position: { x: 0, y: 0 }, height: 40, text: 'Title' },
  draggable: true,
  padding: 4,
  position: { x: 0, y: 0 },
  width: 600,
  height: 550,
  layout: [1, 3],
  children: [
    {
      component: 'Layout',
      position: { x: 0, y: 0 },
      width: 500,
      height: 150,
      layout: [2, 1],
      children: [
        {
          id: 'info_btn',
          text: 'btn',
          font: {
            size: '42px',
            family: 'Skranji',
            color: 'red'
          },
          component: 'Button',
          skin: 'bluebutton',
          position: 'center',
          width: 190,
          height: 80
        }
      ]
    }
  ]
}