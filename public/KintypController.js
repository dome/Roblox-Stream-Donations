/** 
 * @author @earthchie
 * @date 15-DEC-2024
**/
class KintypController {
    queue = [];
    isProcessing = false;

    constructor(containerId) {
      this.$container = document.getElementById(containerId);
    }

    addQueue(from, amount, message) {
      this.queue.push({ from: from, amount: amount, message: message });
      this.processQueue();
    }

    async processQueue() {
      if (this.isProcessing) return;

      this.isProcessing = true;

      while (this.queue.length > 0) {
        const currentItem = this.queue.shift();
        await this.displayIncomingThanksText(
          currentItem.from,
          currentItem.amount,
          currentItem.message
        );
      }

      this.isProcessing = false;
    }

    async displayIncomingThanksText(from, amount, message) {
      const sleep = function (ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      };

      const html = `<kintyp-type5-anime 
            id="kintyp-5" 
            gid="60d944b5489d2ce7" 
            loop_anim="no" 
            status="play" 
            class="kintyp-obj-bottom"
            timeIn="2" 
            timeStay="2" 
            timeOut="2" 
            bgr_color_top="transparent" 
            bgr_color_bottom="#0088ff" 
            back_color="transparent"
            reset="no"
          >
            <div class="fs_5_0 fw_bold kintyp-top" style="color: #ffffff">
              ${from} บริจาค ${amount} บาท
            </div>
            <div class="fs_3_5 fw_bold kintyp-bottom" style="color: #000000">
              ${message}
            </div>
          </kintyp-type5-anime>`;
      console.log(html);
      this.$container.innerHTML = html;
      await sleep(6000); // Wait for 6 seconds
      this.$container.innerHTML = ``;
    }
  }