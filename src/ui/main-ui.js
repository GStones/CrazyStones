/**
 * Created by wizard on 16/3/7.
 */

export default {
  id: 'main',
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
      layout: [2, 2],
      children: [
        {
          id: 'btn1',
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
        },
        {
          id: 'btn2',
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
        },
        {
          id: 'input',
          text: '测试',
          font: {
            size: '42px',
            //family: 'Skranji',
            color: 'red'
          },
          component: 'Label',
          skin: 'bluebutton',
          position: 'center',
          width: 190,
          height: 80
        }
      ]
    }
  ]
}
