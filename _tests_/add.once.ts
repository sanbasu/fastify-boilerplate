import {vlaidtest, validput} from '../src/service/validation';


test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test(" testing the validation", async () => {
    const a:number = 1
    const b:string = "TESTTTT"
    const data = await vlaidtest(a,b)

    expect(data).toEqual({test : "TESTTTT", getvalue : 1})

  })

  describe('savetoDB', () => {
    it('savinf coupon in db', async () => {

      const dbobj = { 
        coupon :{
          save : jest.fn()

        }
      };

      const reqbdy = {
        cpnid : 2,
        cpnname : "tesssss",
        discount : 20,
        location : 1111
      }


      dbobj.coupon.save.mockReturnValue(Promise.resolve());
      const result = await validput(dbobj, reqbdy)
      expect(result).toEqual({Validation : "success"})


    });

    it('savinf coupon in db', async () => {

      const dbobj = { 
        coupon :{
          save : jest.fn()

        }
      };

      const reqbdy = {
        cpnid : 2,
        cpnname : "tesssss",
        discount : 120,
        location : 222222
      }


      dbobj.coupon.save.mockReturnValue(Promise.resolve());
      const result = await validput(dbobj, reqbdy)
      expect(result).toEqual({Validation : "success"})


    });


    it('savinf coupon in db', async () => {

      const dbobj = { 
        coupon :{
          save : jest.fn()

        }
      };

      const reqbdy = {
        cpnid : 2,
        cpnname : "tesssss",
        discount : 120,
        location : 222222
      }


      dbobj.coupon.save.mockReturnValue(Promise.resolve());
      const result = await validput(dbobj, reqbdy)
      expect(result).toEqual({Validation : "FAIL"})


    });




  });
